from flask import Flask,render_template,request,redirect, url_for,jsonify, jsonify, json
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user
from flask_cors import CORS
from base import db
import random


app = Flask(__name__)
CORS(app)
login_manager = LoginManager()
login_manager.init_app(app)
app.config.update(
    SECRET_KEY = 'iO'
)


class User(UserMixin):
    def __init__(self, id):
        self.id = id
@login_manager.user_loader
def load_user(user_id):
    return User(user_id)


@app.route('/api/register/',methods=['POST'])
def register(): 
    data = request.get_json()['formDetails']
    print(data)
    if not data["password"] or not data["email"] or not data["phone"]:
        return 'нету важных данных'
    if not data["name"] or not data["surname"]:
        return 'нету имени или фамилии'
    try:
        db.users.put(data)
    except:
        return 'ошибка экзепта'
    _user = User(data["email"])
    login_user(_user)
    return 'пользователь зарегестрирован'


@app.route('/api/login/', methods=['POST'])
def login_post_form():
    data = request.get_json()['formDetails']
    i = db.users.get("email", data["email"])

    if not i:
         return 'error1'
    if data['email'] != i.email:
        return 'err2' 
    if data['password'] != i.password:
        return 'err3'
    if data["phone"] != i.phone:
        return 'err4'
    _user = User(data['email'])
    login_user(_user)
    return "true"



if __name__ == "__main__":
    app.run()
