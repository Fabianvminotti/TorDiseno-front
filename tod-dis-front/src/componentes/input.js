import React from 'react';
import ReactDOM from 'react-dom';
import '../css/input.css'
import $ from "jquery";

function Input(){

    const urlBasica = `http://cuartointento.eba-pszx6he4.sa-east-1.elasticbeanstalk.com/api/`;
    var dataJson;
    var dataStr='';
    var dataHTML;
 
    function submit() {
        
        
        const a = $("#a").val()
        const b = $("#b").val()
        const c = $("#c").val()
        const n = $("#n").val()
        const T = parseInt($("#T").val())
        const D = parseInt($("#D").val())
        const I = parseInt($("#I").val())

        const urlIDF = `${urlBasica}IDF/${a}/${b}/${c}/${n}/${T}/${D}/${I}`
        

        fetch(urlIDF)
            .then(function (response) {
              return response.json()
            })
            .then((data)=>GeneraTabla(data))
            .catch(err => alert('Revise los datos ingresados')) 
            
           
    }

    function GeneraTabla (data){
        debugger
        let dimArray = data.ejeX.length;
        for(let i =0; i< dimArray; i++){
            dataStr+=  `<tr class="tabla-fila"><td class="tabla-col1">${data.ejeX[i].toFixed(0)}</td><td class="tabla-col2">${data.ejeY[i].toFixed(2)}</td></tr>`
        }
        dataHTML = `<table class="tabla"><tr class="tabla-titulo"><td>Tiempo (min) </td><td>Precipitación (mm) </td></tr>${dataStr}</table>`;
        limpiarHTML()
        insertarHTML()
    }

    function limpiarHTML(){
        document.getElementById('resultados').innerHTML="";
    }
    function insertarHTML(){
        
        document.getElementById('resultados').innerHTML = dataHTML;
        dataStr=""
        dataHTML=""
    }



    return(
        <div>
        <div className="form-container">
            
            <span className="form-descripcion">a</span>
            <input className="form-input" id="a" name="a" type="number"/>

            
            <span className="form-descripcion">b</span>
            <input className="form-input" id="b" name="b" type="number"/>

            <span className="form-descripcion">c</span>
            <input className="form-input" id="c" name="c" type="number"/>

            <span className="form-descripcion">n</span>
            <input className="form-input" id="n" name="n" type="number"/>

            <span className="form-descripcion">Tiempo de recurrencia (años)</span>
            <input className="form-input" id="T" name="T" type="number"/>

            <span className="form-descripcion">Duracion de tormenta (minutos)</span>
            <input className="form-input" id="D" name="D" type="number"/>

            <span className="form-descripcion">Cantidad de intervalos</span>
            <input className="form-input" id="I" name="I" type="number"/>

            <button  id="submit" onClick={submit}>Calcular</button>
        </div>
  

        <div id="resultados"></div>
        </div>
    )
}

export default Input;