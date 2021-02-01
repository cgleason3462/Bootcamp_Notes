from flask import Flask

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)
    
    
@app.route("/")
def home():
    print("Server received request")
    return "Welcome to my Home page!"

@app.route("/about")
def about():
    print("Server received request for about")
    print ("Welcome to my About page!")