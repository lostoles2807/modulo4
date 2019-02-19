// JavaScript Document

var display = document.getElementById("display");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro= document.getElementById("4");
var cinco= document.getElementById("5");
var seis= document.getElementById("6");
var siete= document.getElementById("7");
var ocho= document.getElementById("8");
var nueve= document.getElementById("9");
var cero= document.getElementById("0");
var suma= document.getElementById("mas");
var tres= document.getElementById("3");
var resta= document.getElementById("menos");
var producto= document.getElementById("por");
var division= document.getElementById("dividido");
var limpiar= document.getElementById("on");
var teclas= document.getElementsByClassName("tecla");
var punto=document.getElementById("punto",puntof);
var igualar=document.getElementById("igual");
var masmenos= document.getElementById("sign");
var numero1;
var numero2;
var operador;
var resultado;
display.maxLength = 8;
var cantidad = display.maxLength;




uno.addEventListener("click",unof);
dos.addEventListener("click",dosf);
tres.addEventListener("click",tresf);
cuatro.addEventListener("click",cuatrof);
cinco.addEventListener("click",cincof);
seis.addEventListener("click",seisf);
siete.addEventListener("click",sietef);
ocho.addEventListener("click",ochof);
nueve.addEventListener("click",nuevef);
cero.addEventListener("click",cerof);
suma.addEventListener("click",sumaf);
resta.addEventListener("click",restaf);
//producto.addEventListener("click",productof);
limpiar.addEventListener("click",resetf);
//teclas.addEventListener("mouseover",unom)
//uno.addEventListener("mouseover",unom);
division.addEventListener("click",dividirf);
producto.addEventListener("click",productof);
punto.addEventListener("click",puntof);
igualar.addEventListener("click",igualf);
masmenos.addEventListener("click",masmenosf);



function unof(){
		efecto(uno);
		if(display.textContent=="0" )
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "1";
	   }else{
	   
	   	display.textContent = display.textContent + "1";
	   }
	validarTamanoInput();
}

function dosf(){
	efecto(dos);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "2";
	   }else{
	   	display.textContent = display.textContent + "2";
	   }
	validarTamanoInput();
}
function tresf(){
	efecto(tres);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "3";
	   }else{
	   
	   	display.textContent = display.textContent + "3";
	   }
	validarTamanoInput();
}
function cuatrof(){
	efecto(cuatro);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "4";
	   }else{
	   
	   	display.textContent = display.textContent + "4";
	   }
	validarTamanoInput();
}
function cincof(){
	efecto(cinco);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "5";
	   }else{
	   
	   	display.textContent = display.textContent + "5";
	   }
	validarTamanoInput();
}
function seisf(){
	efecto(seis);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "6";
	   }else{
	   
	   	display.textContent = display.textContent + "6";
	   }
	validarTamanoInput();
}
function sietef(){
	efecto(siete);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "7";
	   }else{
	   
	   	display.textContent = display.textContent + "7";
	   }
	validarTamanoInput();
}
function ochof(){
	efecto(ocho);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "8";
	   }else{
	   
	   	display.textContent = display.textContent + "8";
	   }
	validarTamanoInput();
}
function nuevef(){
	efecto(nueve);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "9";
	   }else{
	   
	   	display.textContent = display.textContent + "9";
	   }
	validarTamanoInput();
}
function cerof(){
	efecto(cero);
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "0";
	   }else{
	   
	   	display.textContent = display.textContent + "0";
	   }
	validarTamanoInput();
}
function sumaf(){
	display.textContent = display.textContent + "+";
}
function restaf(){
	if(display.textContent==0)
	   {
		display.textContent = "";
	   	display.textContent = display.textContent + "-";
	   }else{
	   
	   	display.textContent = display.textContent + "-";
	   }
}
function porf(){
	display.textContent = display.textContent + "*";
}
function dividof(){
	
	display.textContent = display.textContent + "/";
}
/*function puntof(){
	if(display.textContent == "."){
	   	
	   }else{
	   	display.textContent = display.textContent + ".";
	   }
}*/
function puntof(){
	efecto(punto);
	resultado = display.textContent;
	if( resultado.indexOf(".") !== -1)
		{}
		else{display.textContent = display.textContent + ".";}
}

function limpiarf(){
	efecto(limpiar);
	display.textContent = "0";
}

function sumaf(){
	numero1 = display.textContent;
	operador = "+";
	display.textContent = "";
}
function restaf(){
	numero1 = display.textContent;
	operador = "-";
	display.textContent = "";
}
function productof(){
	numero1 = display.textContent;
	operador = "*";
	display.textContent = "";
}
function dividirf(){
	numero1 = display.textContent;
	operador = "/";
	display.textContent = "";
}
function resetf(){
	display.textContent = "0";
	numero1 = 0;
	numero2 = 0;
	operador = "";
}

function masmenosf(){
	if(display.textContent<=0)
	   {
		display.textContent = "0";
	   	
	   }else {
		   display.textContent = "-" + display.textContent; 
	   }
}

function igualf(){
	numero2 = display.textContent;
	if(numero2==""){
			switch(operador){
			case "+":
			resultado = parseFloat(numero1) + parseFloat(numero1);
			break;

			case "-":
			resultado = parseFloat(numero1) - parseFloat(numero1);
			break;

			case "*":
			resultado = parseFloat(numero1) * parseFloat(numero1);
			break;

			case "/":
			resultado = parseFloat(numero1) / parseFloat(numero1);
			break;
			}
	}else{
	   switch(operador){
		case "+":
		resultado = parseFloat(numero1) + parseFloat(numero2);
		break;
			
		case "-":
		resultado = parseFloat(numero1) - parseFloat(numero2);
		break;
			
		case "*":
		resultado = parseFloat(numero1) * parseFloat(numero2);
		break;
			
		case "/":
		resultado = parseFloat(numero1) / parseFloat(numero2);
		break;
	   }
	display.textContent = resultado;
	}
	validarTamanoInput();
}

function validarTamanoInput()
{
	resultado = display.textContent;
	if( resultado.length < 9 ){display.textContent;}
		else{resultado = resultado.substring(0,8);
				display.textContent = resultado;
			}
}
/*function validarTamanoResultado()
{
	if( resultado.length < 9 ){display.textContent;}
		else{resultado = resultado.substring(0,8);}
}*/

function efecto(a){
	a.style.width="70px";
	a.style.height="55px";
	a.style.textAlign="center";
}
 

