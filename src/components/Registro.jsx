import React, {useState} from "react";

const Registro= ()=>{

  const [registro, setRegistro] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
  };


  const handleSubmit= (e)=>{
      e.preventDefault();
      console.log("Registro enviado:", registro);
  }

    return(
        <div className="container mt-5">
        <h2 className="mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex flex-column justify-content-start">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input className="form-control"
              type="text"
              name="nombre"
              id="nombre"
              value={registro.nombre}
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3 d-flex flex-column justify-content-start">
            <label htmlFor="apellido" className="form-label">Apellido:</label>
            <input className="form-control"
              name="apellido"
              type="text"
              id="apellido"
              value={registro.apellido}
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3 d-flex flex-column justify-content-start">
            <label htmlFor="email" className="form-label">Email:</label>
            <input className="form-control"
              type="email"
              id="email"
              name="email"
              value={registro.email}
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3 d-flex flex-column justify-content-start">
            <label htmlFor="telefono" className="form-label">Teléfono:</label>
            <input className="form-control"
              type="tel"
              id="telefono"
              name="telefono"
              value={registro.telefono}
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3 d-flex flex-column justify-content-start">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input className="form-control"
              type="password"
              id="password"
              name="password"
              value={registro.password}
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3 d-flex flex-column justify-content-start">
            <label htmlFor="confirmarPassword" className="form-label">Confirmar Contraseña:</label>
            <input className="form-control"
              type="password"
              id="confirmarPassword"
              name="confirmarPassword"
              value={registro.confirmarPassword}
              onChange={handleChange}
            />
          </div>
  
          <button type="submit" className="registrarse">Registrarse</button>
        </form>
        <div>
        <h3>Información del Registro:</h3>
        <pre>{JSON.stringify(registro, null, 2)}</pre>
        </div>
      </div>
    )

};

export default Registro;