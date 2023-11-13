import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import { name } from 'ejs';
import User from '../models/User.js'; 

// Registro de usuario con envío de correo de confirmación
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    user = new User({ name, email, password });

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Guardar el usuario en la base de datos
    await user.save();

    // Enviar correo de confirmación
    sendConfirmationEmail(user.email, user.name);

    res.json({ msg: 'Usuario registrado exitosamente. Se ha enviado un correo de confirmación.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

// Inicio de sesión de usuario
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Credenciales inválidas 1' });
    }

    // Verificar la contraseña de manera segura
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciales inválidas 2' });
    }

    // Crear y devolver el token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, 'jwtSecret', { expiresIn: 3600 });

    
    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};


// Función para enviar correo de confirmación
const sendConfirmationEmail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure:true,
    auth: {
        user: process.env.USEREMAIL, //'bernalpas@gmail.com', //process.env.USEREMAIL,
        pass: process.env.PASSGMAIL //process.env.PASSEMAIL
    }
});

  const mailOptions = {
    from: process.env.USEREMAIL,
    to: email,
    subject: 'Confirmación de Registro',
    html: `<div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px; text-align: center;">
    <h1 style="color: #0077b6;">¡Bienvenido a mi App!</h1>
    <p style="font-size: 16px;">Gracias por registrarte, ${name}.</p>
    <p style="font-size: 16px;">A partir de este momento, te encuentras registrado para recibir toda la información sobre nuestras actividades.</p>
    <h2 style="font-size: 16px;">¡Felicidades!</h2>
    <p style="font-size: 16px;">Te has registrado con los siguientes datos:</p>
    <p style="font-size: 16px;">Email de registro: <strong>${email}</strong></p>
    </div>
    `
    };
    await transporter.sendMail(mailOptions);
};

export { register, login };
