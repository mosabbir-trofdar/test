var audio = document.getElementById("audio"); 
var audio1 = document.getElementById("audio1"); 
var audio2 = document.getElementById("audio2");
var control = document.getElementById("control");
var control1 = document.getElementById("control1");
var control2 = document.getElementById("control2"); 
var count = 0;

function con (){
				if(count == 0){
								count = 1;
								audio.play();
								control.innerHTML = '<img src="images/play.png" width="30">';
								}
				else{
								count = 0;
								audio.pause();
								control.innerHTML = '<img src="images/pause.png" width="30">';
								}
				}

let slider1 = document.querySelector('#duration_slider1');
let show_duration1 = document.querySelector('#show_duration1');

function change_duration1(){
	slider1_position = audio.duration* (slider1.value / 100);
	audio.currentTime = slider1_position;
}

let timer1;
timer1 = setInterval(range_slider1 ,1000);
        
function range_slider1(){
	let position = 0;
		if(!isNaN(audio.duration)){
		   position = audio.currentTime * (100 / audio.duration);
		   slider1.value = position;
	      }
     }


function con1 (){
				if(count == 0){
								count = 1;
								audio1.play();
								control1.innerHTML = '<img src="images/play.png" width="30">';
								}
				else{
								count = 0;
								audio1.pause();
								control1.innerHTML = '<img src="images/pause.png" width="30">';
								}
				}
function con2 (){
				if(count == 0){
								count = 1;
								audio2.play();
								control2.innerHTML = '<img src="images/play.png" width="30">';
								}
				else{
								count = 0;
								audio2.pause();
								control2.innerHTML = '<img src="images/pause.png" width="30">';
								}
				}

 

