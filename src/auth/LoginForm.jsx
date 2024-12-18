import React, { useState } from "react";
import appFireBase from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFireBase);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      console.log("Bienvenido:", user);
      // Redirige o guarda la sesión como prefieras
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginForm;
