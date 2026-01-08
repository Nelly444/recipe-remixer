from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #This is for react

#Hardcoded recipes
recipes = [
     {"id": 1, "title": "Spaghetti Carbonara", "ingredients": ["spaghetti", "eggs", "bacon"], "instructions": "Cook pasta, mix eggs and bacon, combine."},
    {"id": 2, "title": "Pancakes", "ingredients": ["flour", "milk", "eggs"], "instructions": "Mix ingredients, cook on skillet."}
]

@app.route('/recipes', methods=['GET'])
def get_recipes():
    return jsonify({"recipes": recipes})

if __name__ == '__main__':
    app.run(debug=True)