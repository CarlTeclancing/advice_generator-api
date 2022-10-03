
  quategenerator =()=>{
    fetch("https://api.adviceslip.com/advice")
  .then(function(response) {
    return response.json();
    
  })
  .then(function(data) {
    const { slip } = data;
    //let add = JSON.stringify(data)
    //let advice = Math.floor(Math.random() * data.length)
    document.getElementById("advice").innerHTML = slip.advice;
    document.getElementById("qid").innerHTML = slip.id;
      console.table(slip.advice);

    
  });

  }
  quategenerator();
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