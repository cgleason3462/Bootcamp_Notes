from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection
conn = 'mongodb://localhost:27017'

# @TODO: connect to mongo db and collection
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available
db = client.team_db

# Drops collection if available to remove duplicates
db.team.drop()

# Creates a collection in the database and inserts two documents
db.team.insert_many(
    [
        {
            ''
        }
    ]
)
@app.route('/')
def index():
    # @TODO: write a statement that finds all the items in the db and sets it to a variable
    # CODE GOES HERE

    # @TODO: render an index.html template and pass it the data you retrieved from the database
    return


if __name__ == "__main__":
    app.run(debug=True)
