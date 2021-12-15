
const API_tor = 'cuartointento.eba-pszx6he4.sa-east-1.elasticbeanstalk.com/api/Basico';
//const btn_submit = $('btn_submit');
const btn_submit = document.getElementById('btn_submit');

if(btn_submit!=null){
    var evento = btn_submit.addEventListener("click",function(e){
    debugger
        //e.preventDefault();
        console.log(e)
        alert('anda')
    })
}




// function andar(e){
//     e.preventDefault();
//    console.log('ando');
// }
