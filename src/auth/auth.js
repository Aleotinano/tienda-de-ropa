import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig"; // Importa tu configuración de Firebase

// Registrar usuario
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Devuelve la información del usuario registrado
  } catch (error) {
    console.error("Error al registrar:", error);
    throw error;
  }
};

// Iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Devuelve la información del usuario logueado
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

// Cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth); // Cierra la sesión
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
