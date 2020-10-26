from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/registration-success')
def registration_success():
    return render_template('registration-success.html')

@app.route('/registration-server-error')
def registration_server_error():
    return render_template('registration-server-error.html')

@app.route('/registration-client-error')
def registration_client_error():
    return render_template('registration-client-error.html')

if __name__ == '__main__':
    app.run()