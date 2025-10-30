import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Contenedor izquierdo - visible solo en pantallas grandes */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-600 justify-center items-center text-white text-3xl font-bold">
        Bienvenido a EasyOrder
      </div>

      {/* Contenedor derecho - visible siempre */}
      <div className="flex w-full lg:w-1/2 bg-gray-100 justify-center items-center">
        <div className="">
          {activeTab === "login" && (
            <div className="justify-center">
              <div className="inline-grid grid-cols-2 gap-4">
                <h2>EasyOrder </h2>
                <h2>
                </h2>
              </div>
               <div className="w-full flex justify-center items-center">
              <form action="" className="w-full flex justify-center items-center">
                
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
               
 <input type="text" />
               <input type="text" />
                <button
                  onClick={() => navigate("/home")}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Iniciar sesion
                </button>
                <button onClick={() => setActiveTab("register")}>
                  No tenes cuenta ? Registrate
                </button>
                
              
              </form>
              </div>
            </div>
          )}
          {activeTab === "register" && (
            <div>
              <h2 className="text-2xl font-semibold text-emerald-500 mb-4">
                Registrarse
              </h2>
              <button
                onClick={() => navigate("/home")}
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
              >
                Crear cuenta
              </button>
              <button onClick={() => setActiveTab("login")}>
               Ya tenes cuenta? Inicia Sesion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
