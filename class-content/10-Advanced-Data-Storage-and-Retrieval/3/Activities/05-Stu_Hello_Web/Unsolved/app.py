from flask import Flask

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)
 

@app.route("/")
def home():
    print("Server received request")
    return("Hello, world!")

@app.route("/contact")
def contact():
    print("Server received request")
    return("You can email me at ...")

@app.route("/about")
def about():
    print("Server received request for about")
    print("My name is Conor and I am in Austin Texas!")