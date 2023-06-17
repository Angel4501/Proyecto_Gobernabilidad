import React, { useState } from 'react'
import './Administrador.css'
import axios from 'axios';


const Administrador = () => {
    

    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleButtonClick = async () => {
        try {
          const url = 'https://npr3s.com/control/projects/gti-1265-1167/issues.xml';
          const apiKey = '3141e26b74ff2bcdcd1df91632cdbefb126be450'; // Reemplaza con tu clave de API
          const data = {
            issue: {
              project_id: 19,
              subject: 'ENVIADO DESDE APP',
              description: 'COMENTARIO',
              startdate: '2023-06-16'
            }
          };
      
          const response = await axios.post(url,{
            headers: {
              'Content-Type': 'application/json',
              'X-Redmine-API-Key': apiKey
            }
          });
      
          console.log(response.data); // Respuesta del servidor
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="App">
            <h1>Reportar problema</h1>
            <form >
                <textarea
                    className="textAreaResponderPregunta"
                    placeholder="PRUEBA DESDE LA APP"
                    onChange={handleTextareaChange}
                />
                <div>
                    <button  className="submitButton" onClick={(e)=>{
                        if(textareaValue===''){
                            window.alert('No puede mandar un mensaje vacío')
                        }
                        else{
                            //window.alert(textareaValue)
                            handleButtonClick()
                            window.alert('siuuu')
                        }
                        
                        e.preventDefault()
                    }}>
                        Enviar reporte
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Administrador
