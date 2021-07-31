let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;



let track = document.createElement('audio');


let All_song = [
   {
     name: "Polatok Tufan.mp3",
     path: "audio/Polatok Tufan.mp3",
     img: "images/polatok1.jpg",
     singer: "Al Musanna Tamin"
   },
   {
     name: "Amor Diper Kahini.mp3",
     path: "audio/amor.mp3",
     img: "images/amor1.jpg",
     singer: "Al Musanna Tamin"
   },
   {
     name: "Captain.kp3",
     path: "audio/captain.mp3",
     img: "images/captain1.jpg",
     singer: "Al Musanna Tamin"
   },
   {
     name: "fourth song",
     path: "audio/amor.mp3",
     img: "images/asombov1.jpg",
     singer: "Al Musanna Tamin"
   },
   {
     name: "fifth song",
     path: "audio/amor.mp3",
     img: "images/amor1.jpg",
     singer: "Al Musanna Tamin"
   }
];



function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	
}

load_track(index_no);


function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }

 function reset_slider(){
 	slider.value = 0;
 }

function playsong(){
  track.play();
  Playing_song = true;
  border = 'none';
  play.innerHTML = '<img src="images/play.png" width="30">';
}

function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<img src="images/pause.png" width="30">';
}


function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }
// function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<img src="images/pause.png" width="30">';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
