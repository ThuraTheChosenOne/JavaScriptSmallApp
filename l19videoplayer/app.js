//Get UI
const getcontainer = document.querySelector(".container");
const getvideoscreen = document.getElementById('videoscreen');
const playbtn = document.getElementById('play'),
  prevbtn = document.getElementById('prev'),
  nextbtn = document.getElementById('next'),
  stopbtn = document.getElementById('stop');
const getprogress = document.getElementById('progress'),
getprogressbar = document.getElementById('progress-bar');
const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');

const getopenfullscreen = document.querySelector(".openfullscreen"),
getclosefullscreen = document.querySelector(".closefullscreen");

const videos = ["samplevideo1","samplevideo2"];
let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(video){
  getvideoscreen.src = `./source/${video}.mp4`;
  gettitle.textContent = video;
}

function playvideo(){

  playbtn.querySelector('i.fas').classList.remove('fa-play');
  playbtn.querySelector('i.fas').classList.add('fa-pause');

  getvideoscreen.play();
}


function pausevideo(){

  playbtn.querySelector('i.fas').classList.remove('fa-pause');
  playbtn.querySelector('i.fas').classList.add('fa-play');
  
  getvideoscreen.pause();
}


function playpausevideo(){
  if(getvideoscreen.paused){
    playvideo();
  }else{
    pausevideo();
  }

}

function nextvideo(){
  curridx++;
  if(curridx > videos.length-1){
    curridx = 0;
  }
  loadvideo(videos[curridx]);
  playvideo();
}

function previousvideo(){
  curridx--;
  if(curridx < 0 ){
    curridx = videos.length-1;
  }

  loadvideo(videos[curridx]);
  playvideo();
}


function stopvideo(){
  getvideoscreen.currentTime = 0;
  pausevideo();
}

function updateprogress(e){

  // const currentTime = e.target.currentTime;
  // const duration = e.target.duration;
  // console.log(currentTime,duration);

  // const {currentTime} = e.target;
  // const {duration} = e.target;
  // console.log(currentTime,duration);

  // const [currentTime,duration] = [e.target.currentTime,e.target.duration];
  // console.log(currentTime,duration);

  const [currentTime,duration] = [e.srcElement.currentTime,e.srcElement.duration];
  // console.log(currentTime,duration);

  if(getvideoscreen.currentTime === 0){
    getprogressbar.style.width = "0%";

  }else{
    const progresspercent = (currentTime/duration) * 100;
    getprogressbar.style.width = `${progresspercent}%`;
  }


  let getmins = Math.floor( getvideoscreen.currentTime/60);
  let getsecs = Math.floor(getvideoscreen.currentTime%60);


  // if(getmins < 10 ){
  //   // getmins = "0" + getsecs;
  //   getmins = "0" + String(getmins);   
  // }

  // if(getsecs < 10 ){
  //   // getsecs = "0" + getsecs;
  //   getsecs = "0" + String(getsecs);   
  // }

  const minutevalue = getmins.toString().padStart(2,'0');
  const secondvalue = getsecs.toString().padStart(2,'0');
  // console.log(minutevalue,secondvalue);

  getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;

}

function setprogress(e){
 const getclientwidth = e.target.clientwidth;
 const getclickx = e.offsetX;

 const duration = getvideoscreen.duration;
 getvideoscreen.currentTime = (getclickx/getclientwidth) * duration;
}

function openfullscreen(){

 
  if(getcontainer.requestFullscreen){
    getcontainer.requestFullscreen();//standard

  }else if(getcontainer.mozRequestFullscreen){
    getcontainer.mozRequestFullscreen();
  }
  else if(getcontainer.mwebkitRequestFullscreen){
    getcontainer.webkitRequestFullscreen();
  }else if(getcontainer.msRequestFullscreen){
    getcontainer.msRequestFullscreen();
  }


  getopenfullscreen.style.display = "none";
  getclosefullscreen.style.display = "inline-block";
}

function closefullscreen(){
  getopenfullscreen.style.display = "inline-block";
  getclosefullscreen.style.display = "none";
}
getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvideo);
playbtn.addEventListener('click',playpausevideo);
nextbtn.addEventListener('click',nextvideo);
prevbtn.addEventListener('click',previousvideo);
stopbtn.addEventListener('click',stopvideo);

getprogress.addEventListener('click',setprogress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);



