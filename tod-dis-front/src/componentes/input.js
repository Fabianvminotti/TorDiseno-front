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
        debugger
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
            .catch(err => console.log(err)) 
            
           
    }

    function GeneraTabla (data){
        debugger
        let dimArray = data.ejeX.length;
        for(let i =0; i< dimArray; i++){
            dataStr+=  `<tr class="tabla-columna"><tdclass="tabla-celda">${data.ejeX[i]}</td><td class="tabla-celda">${data.ejeY[i]}</td></tr>`
        }
        dataHTML = `<table class="tabla">${dataStr}</table>`;
        insertarHTML()
    }

    function insertarHTML(){
        document.getElementById('resultados').innerHTML = dataHTML;
    }



    return(
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

            <button onClick={submit}>Calcular</button>
        </div>
        
    )
}

export default Input;