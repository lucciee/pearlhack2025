import random
from flask import Blueprint, render_template, request, jsonify, redirect, url_for
import os
import json


# views = Blueprint(__name__, "views")
views = Blueprint("views", __name__) 




@views.route("/")
def home():
    return render_template("index.html", name="ram")


@views.route("/profile/<username>")
def profile(username):
    return render_template("index.html", name = username)


@views.route("/data")
def get_data():
    data = request.json
    return jsonify(data)

@views.route("/go-to-home")
def go_to_home():
    return redirect(url_for("views.home"))

@views.route("/hello")
def hello():
    return f"{random.randint(1, 100)} Hello World!"



with open("courses.json", "r") as file:
    courses = json.load(file)



@views.route("/classes")
def classes():
    courseNum, courseName = courses
    return jsonify({"courseNum": courseNum, "courseName": courseName})

@views.route("/events")
def event():
    with open("events.json", "r") as file:
        events = json.load(file)
    names, times, dates, locations, descriptions = events
    return jsonify({"names": names, "times": times, "dates": dates, "locations": locations, "descriptions": descriptions})


@views.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['fileInput']
    file.save(os.path.join('uploads', file.filename))
