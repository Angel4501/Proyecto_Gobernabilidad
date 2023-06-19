import React, { useState } from 'react'
import './Administrador.css'
import axios from 'axios';


const Administrador = () => {

  // Crear un objeto Date con la fecha y hora actuales
  var fechaActual = new Date();

  // Obtener el año, mes y día de la fecha actual
  var year = fechaActual.getFullYear();
  var month = fechaActual.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
  var day = fechaActual.getDate();

  // Formatear la fecha en el formato "fecha-mes-dia"
  var fechaFormateada = day + '-' + month + '-' + year;



  const [textareaValue, setTextareaValue] = useState('');
  const [textareaValueSubject, setTextareaValueSubject] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleTextareaSubjectChange = (event) => {
    setTextareaValueSubject(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const url = 'https://npr3s.com/control/projects/gti-1265-1167/issues.xml?key=3141e26b74ff2bcdcd1df91632cdbefb126be450'//'https://npr3s.com/control/projects/gti-1265-1167/issues.xml';
      const apiKey = '3141e26b74ff2bcdcd1df91632cdbefb126be450';

      const data = {
        issue: {
          project_id: 19,
          subject: textareaValueSubject,
          description: textareaValue,
          startdate: fechaFormateada
        }
      };

      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data); // Response from Redmine API
      window.alert('Issue created successfully');
    } catch (error) {
      console.error(error);
      window.alert('Error creating issue');
    }
  };

  return (
    <div className="divPrincipal">
      <div className='center-div'>
        <h1 className='titulo_h1'>Reportar problema</h1>
        <form >
          <textarea
            className="textAreaSubject"
            placeholder="Asunto"
            value={textareaValueSubject}
            onChange={handleTextareaSubjectChange}
          />
          <textarea
            className="textAreaResponderPregunta"
            placeholder="Descripción, prueba desde la app"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
          <div>
            <button className="submitButton" onClick={(e) => {
              if (textareaValue === '' || textareaValueSubject === "") {
                window.alert('No puede mandar un mensaje vacío')
              }
              else {
                window.alert("Mensaje Enviado")
                handleButtonClick()
                setTextareaValueSubject("");
                setTextareaValue("");
              }

              e.preventDefault()
            }}>
              Enviar reporte
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Administrador
