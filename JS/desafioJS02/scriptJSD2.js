import{dadosCep} from './modCep.js';


const btnBuscar = document.querySelector("#buscarCep");
const CEP_      = document.querySelector("#NumeroCep");
    
btnBuscar.addEventListener('click',function(){
    dadosCep(CEP_.value);
})  

dadosCep(CEP_);
