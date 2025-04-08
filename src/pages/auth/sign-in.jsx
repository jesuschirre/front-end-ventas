import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState("");   
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => {
      fetch("https://back-ventas.onrender.com/api/usuarios")
        .then((response) => response.json())
        .then((data) => {
          setUsuarios(data);
        })
        .catch((error) => {
          console.error("Error al obtener los usuarios:", error);
        });
    }, []); 

    const handleLogin = () => {
      const usuarioEncontrado = usuarios.find(
        (u) => u.usuario === usuario && u.password === password
      );
  
      if (usuarioEncontrado) {
        alert("¡Inicio de sesión exitoso!");
        navigate("/dashboard/home");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
      setUsuario("");
      setPassword("");
    
    };
    


  return (
    
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter usuario and password to Sign In.</Typography>
        </div>
        <form  className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        
          
          <Button className="mt-10" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
        </form>
      </div>
      
      <div className="w-2/5 h-30  hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
