import React, {useState} from "react";

const Registro= ()=>{

    const [nombre, setNombre]= useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const [confirPassword, setConfirPassword] = useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();
    }

    return(
        <div className="container mt-5">
        <h2 className="mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="confirmarPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmarPassword"
              value={confirPassword}
              onChange={(e) => setConfirPassword(e.target.value)}
            />
          </div>
  
          <button type="submit">Registrarse</button>
        </form>
      </div>
    )

};

export default Registro;