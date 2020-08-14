import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //funcion que tomas las citas acuales y agrega la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //mensaje condicional
  const titulo =
    citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita
                cita={cita}
                key={cita.id}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
