
  quategenerator =()=>{
    fetch("https://api.adviceslip.com/advice")
  .then(function(response) {
    return response.json();
    
  })
  .then(function(data) {
    const { slip } = data;
    //let add = JSON.stringify(data)
    //let advice = Math.floor(Math.random() * data.length)
    adviceText = document.getElementById("advice")
    adviceText.innerHTML = slip.advice;
    document.getElementById("qid").innerHTML = "ADVICE " + " # " + slip.id;
      

    
  });
}
quategenerator();


  quategenerator();
  function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
      // some time the voice will not be initialized so we can call spaek with empty string
      // this will initialize the voices 
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }
  
  
  function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);
  
  }
  
  if ('speechSynthesis' in window) {
  
    let voices = getVoices();
    let rate = 10, pitch = 2, volume = 1;
    
    let text = "hello world";
  
    speak(text, voices[5], rate, pitch, volume);
    console.log("succes")

    setTimeout(()=>{ // speak after 2 seconds 
      rate = 0.5; pitch = 1.5, volume = 0.5;
      text = "Spaecking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
      speak(text, voices[10], rate, pitch, volume );
    }, 2000);
    
  }else{
    console.log(' Speech Synthesis Not Supported 😞'); 
  }
 
/*
  document.getElementById("btn").addEventListener("mousedown", fetchAdvice);
const quote = document.querySelector(".card__quote");
const quoteId = document.querySelector(".quote__id");

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        cache: "reload",
    });
    const data = await response.json();
    const { slip } = data;
    quote.innerText = slip.advice;
    quoteId.innerText = slip.id;
}
*/
const playButton = document.getElementById('playbtn')
playButton.addEventListener('click', ()=>{
  var a = document.getElementById("advice").value;
  
  playText(a)
})

function playText(text){
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 1
  speechSynthesis.speak(utterance)
  console.log("hello world")
}
