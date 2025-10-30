import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Contenedor izquierdo - visible solo en pantallas grandes */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-600 justify-center items-center text-white text-2xl font-bold">
        Bienvenido a EasyOrder
      </div>

      {/* Contenedor derecho - visible siempre */}
      <div className="flex w-full lg:w-1/2 bg-gray-100 justify-center items-center bg-emerald-100">
       <div class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-2 text-center text-xl/9 font-bold tracking-tight text-emerald-600">EasyOrder</h2>
      <h2 className="flex justify-center text-center text-emerald-600">
<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
    </h2>
   
  </div>
{activeTab === "login" && (
  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class=" text-center text-2xl/9 font-bold  text-gray-500">Ingresa a tu cuenta</h2>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-emerald-500">Email</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-emerald-500 outline-1 -outline-offset-1 outline-white/10 border-2 border-emerald-500 placeholder:text-emerald-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-emerald-500">Contraseña</label>
          
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-emerald-500 outline-1 -outline-offset-1 outline-white/10 border-2 border-emerald-500 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
        </div>
        <div class="text-sm">
            <a href="#" class=" text-gray-400 hover:text-emerald-500">Olvidaste la contraseña?</a>
          </div>
      </div>

      <div>
        <button onClick={() => navigate("/home")} type="submit" class="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm/6 font-semibold text-emerald-100 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">Ingresar</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-400">
      No tenes cuenta?
      <button onClick={() => setActiveTab("register")} class="font-semibold text-emerald-400 hover:text-emerald-500">Registrate</button>
    </p>
  </div>)}
  {activeTab === "register" && (
  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class=" text-center text-2xl/9 font-bold  text-gray-500">Crear cuenta</h2>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-emerald-500">Email</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-emerald-500 outline-1 -outline-offset-1 outline-white/10 border-2 border-emerald-500 placeholder:text-emerald-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-emerald-500">Contraseña</label>
          
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-emerald-500 outline-1 -outline-offset-1 outline-white/10 border-2 border-emerald-500 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
        </div>
       
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-emerald-500">Repetir contraseña</label>
          
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-emerald-500 outline-1 -outline-offset-1 outline-white/10 border-2 border-emerald-500 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
        </div>
       
      </div>

      <div>
        <button onClick={() => navigate("/home")} type="submit" class="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm/6 font-semibold text-emerald-100 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">Sign in</button>
      </div>
    </form>

    <p class="mt-4 text-center text-sm/6 text-gray-400">
      Ya tenes cuenta?
      <button onClick={() => setActiveTab("login")} class="font-semibold text-emerald-400 hover:text-emerald-500">Inicia sesión</button>
    </p>
  </div>)}

</div>

      </div>
    </div>
  );
};

export default Login;
