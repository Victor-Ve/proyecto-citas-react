import React, { Fragment, useState } from "react";

const Formulario = () => {
  //Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //state para errores
  const [error, actualizarError] = useState(false);

  //funcion que se ejecuta cada que un usuario escribe en un input
  const actualizarState = (event) => {
    actualizarCita({
      ...cita,
      [event.target.name]: event.target.value,
    });
  };

  //extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Funcion cuando el usuario presione agregar cita
  const submitCita = (event) => {
    event.preventDefault(); //evitar que se recarge la pagina

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //Asignar ID

    //Crear la cita

    //reiniciar form
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className='alerta-error'>
          Todos los campos son obligatorios
        </p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre mascota'
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          onChange={actualizarState}
          value={sintomas}></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
