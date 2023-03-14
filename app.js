const sliderEl = document.getElementById("range");
const song = document.getElementById("song"); 
const ctrlEl = document.getElementById("ctrl");
const trackName = document.getElementById("track");
const artistEl = document.getElementById("artist");
const backgroundEl = document.getElementById("imgbanner");
const forwardbtn = document.getElementById("forward");
const backwardbtn = document.getElementById("backward");
const currentTimeEl = document.querySelector(".current-time");
const trackDuration = document.querySelector(".song-duration");
const volumeEl = document.getElementById("volume-range");
const volumeIcon = document.getElementById("volume-icon");
const homeEl = document.getElementById("home");
const songTracks = document.querySelector(".tracks");
const volumeTime = document.querySelector(".volume-time");
const volumeTotal = document.querySelector(".volume-total");


let timer;
let autoplay=1;
let index = 0;



let track = document.createElement("audio");

homeEl.addEventListener("click",()=>{
    songTracks.classList.toggle("homepage");
    if(homeEl.classList.contains("fa-bars")){
        homeEl.classList.remove("fa-bars");
        homeEl.classList.add("fa-circle-xmark")
        playList();
    }else{
        homeEl.classList.add("fa-bars");
        homeEl.classList.remove("fa-circle-xmark"); 
    }
   
});


track.onloadedmetadata = function(){
    sliderEl.max = track.duration;
    sliderEl.value = track.currentTime;
}

function playList(){
   const playListEl = document.createElement("div");
   const artistName = document.createElement("div")
   playListEl.setAttribute("class","list");
   artistName.setAttribute("class","names");
   playListEl.append(artistName);
   for(index in allMusic){
     artistName.append(allMusic[index].artist,allMusic[index].name);
     playListEl.append(songsName);
    songTracks.append(playListEl);
   }   
}

   
volumeIcon.addEventListener("click",()=>{
   volumeEl.classList.toggle("vol-active");
   volumeTime.classList.toggle("volume-active");
   volumeTotal.classList.toggle("volume-active");
   setTimeout(()=>{
    volumeEl.classList.add("vol-active");
    volumeTime.classList.toggle("volume-active");
   volumeTotal.classList.toggle("volume-active");
},10000);
});

volumeEl.addEventListener("change",()=>{
    track.volume = volumeEl.value/100;
    
})
   



let allMusic = [
    {
        name:"On My Way",
        artist:"Alan Walker",
        img:"css/alanwalker.jpg",
        src:"css/onmyway.mp3"
    },
    {
        name:"Where Are Ü Now",
        artist:"Justin Bieber",
        img:"css/justinBiber.jpg",
        src:"css/wru.mp3"
    },
    {
        name:"Hymn For The Weekend",
        artist:"Coldplay",
        img:"css/coldplay.jpg",
        src:"css/coldplay.mp3"
    },
    {
        name:"Alone",
        artist:"Alan Walkar & Ava Max",
        img:"css/alone.jpg",
        src:"css/alone.mp3"
    },
    {
        name:"Unstoppable",
        artist:"Sia",
        img:"css/unstoppable.jpg",
        src:"css/unstoppable.mp3"
    },
    {
        name:"Running Up That Hill",
        artist:"Kate Bush",
        img:"css/running.jpg",
        src:"css/running.mp3"
    }
];


function loadSongs(index){
    clearInterval(timer);
    resetsongs();
   trackName.innerText = allMusic[index].name;
   artistEl.innerText = allMusic[index].artist;
   backgroundEl.src = allMusic[index].img;
   track.src = allMusic[index].src;
}
loadSongs(index);




ctrlEl.addEventListener("click",()=>{

    if(ctrlEl.classList.contains("fa-circle-pause")){
        track.pause();
        ctrlEl.classList.remove("fa-circle-pause");
        ctrlEl.classList.add("fa-circle-play");
        backgroundEl.classList.remove("active");
    }else{
        track.play();
        ctrlEl.classList.add("fa-circle-pause");
        ctrlEl.classList.remove("fa-circle-play");
        backgroundEl.classList.add("active");
        setInterval(()=>{
            sliderEl.value = track.currentTime;
            trackDuration.innerHTML = formatTime(track.duration);
            currentTimeEl.innerHTML = formatTime(track.currentTime);
        },300);
        currentTimeEl.innerHTML = `00:00`;}
    });


const formatTime = function(time){
    let min = Math.floor(time/60);
    if(min<10){
        min = `0` + min;
    }
    let sec = Math.floor(time%60);
    if(sec<10){
        sec = `0`+sec;
    }
    return `${min} : ${sec}`
}

function resetsongs(){
   sliderEl.value = 0;
}


forwardbtn.addEventListener("click",forward)
    
function forward(){
    if(index < allMusic.length -1){
        index ++;
        loadSongs(index);
        track.play();
        ctrlEl.classList.add("fa-circle-pause");
    }else{
        index = 0;
        loadSongs(index);
        track.play();
        ctrlEl.classList.add("fa-circle-pause");
    }
}



backwardbtn.addEventListener("click",()=>{
    if(index > 0){
        index --;
        loadSongs(index);
        track.play();
        ctrlEl.classList.add("fa-circle-pause");
    }else{
        index = allMusic.length;
        loadSongs(index);
        track.play();
        ctrlEl.classList.add("fa-circle-pause");
    }
});

sliderEl.addEventListener("change",()=>{
    track.play();
    track.currentTime = sliderEl.value;
    ctrlEl.classList.add("fa-circle-pause");
    ctrlEl.classList.remove("fa-circle-play");
});


   
































