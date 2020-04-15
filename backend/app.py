from flask import Flask, request
from flask_cors import CORS
import requests
import json


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return {"welcome to my caddienow-iss app": "hello!"}, 200


@app.route('/iss-now')
def current_location():
    res = requests.get("http://api.open-notify.org/iss-now.json")
    payload = json.loads(res.text)
    return payload, 200

@app.route('/iss-pass')
def pass_times(): 
    lat = ""
    lon = ""
    alt = ""
    n = ""
    url = "http://api.open-notify.org/iss-pass.json?"
    if request.args.get('lat'):
      lat = request.args.get('lat')
      url = url + "lat=" + lat
    if request.args.get('lon'):
      lon = request.args.get('lon')
      url = url + "&lon=" + lon
    if request.args.get('alt'):
      alt = request.args.get('alt')
      url = url + "&alt=" + alt
    if request.args.get('n'):
      n = request.args.get('n')
      url = url + "&n=" + n
    res = requests.get(url)
    payload = json.loads(res.text)
    return payload, 200

@app.route('/astros')
def astros():
    res = requests.get("http://api.open-notify.org/astros.json")
    payload = json.loads(res.text)
    return payload, 200

if __name__ == '__main__':
    app.run()