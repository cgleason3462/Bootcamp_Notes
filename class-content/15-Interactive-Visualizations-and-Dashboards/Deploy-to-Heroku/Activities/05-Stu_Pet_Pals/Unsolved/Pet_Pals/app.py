# import necessary libraries
import pandas as pd
from sqlalchemy import func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

# @TODO: Setup your database here
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/pets.sqlite"
db = SQLAlchemy(app)

class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    type = db.Column(db.String())
    age = db.Column(db.Integer)

    def __repr__(self):
        return '<Pet %r>' % (self.name)

@app.route("/")
def home():
    return render_template("index.html")


# @TODO: Create a route "/send" that handles both GET and POST requests
# If the request method is POST, save the form data to the database
# Otherwise, return "form.html"
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        petName = request.form["petName"]
        petType = request.form["petType"]
        petAge = request.form["petAge"]

        pet = Pet(name=petName, type=petType, age=petAge)
        db.session.add(pet)
        db.session.commit()

        return "Thanks for the form data!"

    return render_template("form.html")

# @TODO: Create an API route "/api/pals" to return data to plot
@app.route("/api/pals")
def list_pets():
    sel = [Pet.type, func.count(Pet.type)]
    results = db.session.query(*sel).\
        group_by(Pet.type).all()
    df = pd.DataFrame(results, columns=['type', 'count'])
    return jsonify({
        "type": "bar",
        "x": df["type"].values.tolist(),
        "y": df["count"].values.tolist()
    })

if __name__ == "__main__":
    app.run()
