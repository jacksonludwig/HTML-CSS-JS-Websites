import datetime

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/hi")
def index():
    headline = "Hello from flask server!"
    return render_template("index.html", headline=headline)


@app.route("/bye")
def bye():
    headline = "Bye from flask server!"
    return render_template("index.html", headline=headline)


@app.route("/")
@app.route("/today")
def today():
    now = datetime.datetime.now().second % 5 == 0
    return render_template("index.html", today=now)


@app.route("/people")
def list_people():
    names = ["john", "jack", "joe"]
    return render_template("index.html", names=names)
