from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from datetime import timedelta

# Initialize the Flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///recipes.db'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Replace with a secure key
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    recipes = db.relationship('Recipe', backref='author', lazy=True)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    ingredients = db.Column(db.Text, nullable=False)
    steps = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Routes
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"message": "Invalid input"}), 400

    if User.query.filter_by(username=data['username']).first():
        return jsonify({"message": "Username already taken"}), 400

    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(username=data['username'], password=hashed_pw)

    try:
        db.session.add(user)
        db.session.commit()
        token = create_access_token(identity=user.id, expires_delta=timedelta(hours=1))
        return jsonify({"message": "User registered successfully!", "token": token}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "Registration failed", "error": str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"message": "Invalid input"}), 400

    user = User.query.filter_by(username=data['username']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id, expires_delta=timedelta(hours=1))
        return jsonify({"message": "Login successful!", "token": token}), 200

    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/recipes', methods=['GET', 'POST'])
@jwt_required()
def recipes():
    user_id = get_jwt_identity()
    if request.method == 'POST':
        data = request.get_json()
        if not all(k in data for k in ('title', 'category', 'ingredients', 'steps')):
            return jsonify({"message": "Missing recipe details"}), 400

        recipe = Recipe(
            title=data['title'],
            category=data['category'],
            ingredients=data['ingredients'],
            steps=data['steps'],
            user_id=user_id
        )

        try:
            db.session.add(recipe)
            db.session.commit()
            return jsonify({"message": "Recipe added successfully!"}), 201
        except Exception as e:
            db.session.rollback()
            app.logger.error(f"Failed to add recipe: {str(e)}")
            return jsonify({"message": "Failed to add recipe", "error": str(e)}), 500

    recipes = Recipe.query.filter_by(user_id=user_id).all()
    return jsonify([{
        "id": r.id,
        "title": r.title,
        "category": r.category,
        "ingredients": r.ingredients,
        "steps": r.steps
    } for r in recipes]), 200

@app.route('/recipes/<int:recipe_id>', methods=['PUT'])
@jwt_required()
def update_recipe(recipe_id):
    user_id = get_jwt_identity()
    data = request.get_json()

    recipe = Recipe.query.filter_by(id=recipe_id, user_id=user_id).first()
    if not recipe:
        return jsonify({"message": "Recipe not found"}), 404

    recipe.title = data.get('title', recipe.title)
    recipe.category = data.get('category', recipe.category)
    recipe.ingredients = data.get('ingredients', recipe.ingredients)
    recipe.steps = data.get('steps', recipe.steps)

    try:
        db.session.commit()
        return jsonify({"message": "Recipe updated successfully!"}), 200
    except Exception as e:
        db.session.rollback()
        app.logger.error(f"Failed to update recipe: {str(e)}")
        return jsonify({"message": "Failed to update recipe", "error": str(e)}), 500

# Handle root access (optional)
@app.route('/', methods=['GET'])
def root():
    return jsonify({"message": "Flask API is running!"}), 200

# Initialize database
with app.app_context():
    db.create_all()

# Run the app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)