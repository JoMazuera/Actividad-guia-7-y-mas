from flask import Flask, request, jsonify
import hashlib

app = Flask(__name__)

# Simulación de base de datos en memoria
usuarios = {}

# Función para encriptar contraseñas
def encriptar_contraseña(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Ruta para registrar un nuevo usuario
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Verifica si el usuario ya existe
    if username in usuarios:
        return jsonify({"mensaje": "El usuario ya existe"}), 400

    # Guarda el usuario en la "base de datos"
    usuarios[username] = encriptar_contraseña(password)
    return jsonify({"mensaje": "Registro exitoso"}), 201

# Ruta para iniciar sesión
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Verifica si el usuario existe y la contraseña coincide
    if username in usuarios and usuarios[username] == encriptar_contraseña(password):
        return jsonify({"mensaje": "Autenticación satisfactoria"}), 200
    else:
        return jsonify({"mensaje": "Error en la autenticación"}), 401

# Ejecutar el servidor
if __name__ == '__main__':
    app.run(debug=True)