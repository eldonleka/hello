from flask import Flask, render_template, request

app = Flask(__name__, template_folder='.')


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
      return render_template("index.html")
    elif request.method == "POST":
      return render_template("greet.html", name=request.args.get("name", "world"))

