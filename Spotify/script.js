console.log("Welcome to Spotify");
// Initialize the variables
let songIndex =0;
let audioElement=new Audio('music1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs=[
   {songName:"Salam-eIshq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
   {songName:"Salam-eIshq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
   {songName:"Salam-eIshq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
   {songName:"Salam-eIshq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
   {songName:"Salam-eIshq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
   {songName:"Salam-eIshq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
]

//audioElement.play()
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused ){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // Update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
