# from flask import Flask, send_from_directory
# import random

# app = Flask(__name__)

# # Path for our main Svelte page
# @app.route("/")
# def base():
#     return send_from_directory('frontend/public', 'index.html')

# # Path for all the static files (compiled JS/CSS, etc.)
# @app.route("/<path:path>")
# def home(path):
#     return send_from_directory('frontend/public', path)

# @app.route("/rand")
# def hello():
#     return str(random.randint(0, 100))

# if __name__ == "__main__":
#     app.run(debug=True)





from flask import Flask
from views import views


app = Flask(__name__) 
app.register_blueprint(views, url_prefix="/")


if __name__ == '__main__':
    app.run(debug=True, port=8000)
    

