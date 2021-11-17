'use strict';



/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//my global varibals 

const gQuotesNum = 5
var gQuotes = [];
var gCrrColor = ' rgb(58, 193, 98)';

// Function called area 


GetGQuoteStarted()

addDataToQuoteobj(100, 'I love beautiful things; I like having nice clothes, and I can appreciate why other people do - but Ive also started to learn more about the impact of what we buy: how things are made, how much you buy and the quality of everything.'
,'' , 'Lily Cole', '',0)
addDataToQuoteobj(101, "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough."
,'' , 'Oprah Winfrey', '',0)
addDataToQuoteobj(102, "I'll never forget where I'm from. It's essential to remain humble and evolving."
, '', 'Freida Pinto', '',1)
addDataToQuoteobj(103, "You’ll never get bored when you try something new. There’s really no limit to what you can do."
, '2020', 'Dr. Seuss','' ,2)
addDataToQuoteobj(104, "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
, '2016', 'Patrick McKenzie', 'unknon citation',3)



// set interval EX 

setInterval(printQuote, 30000);



document.getElementById('load-quote').addEventListener("click", printQuote, false);

////
/// general start 

function GetGQuoteStarted() {
  for (var i = 0; i < gQuotesNum; i++) {
    gQuotes.push({
      id: '10' + i,
      quote: '',
      year: '',
      source: '',
      citation: '',
      reviews: 0,
    })
  }
}


// start data qwote
function addDataToQuoteobj(id, quote, year, source, citation,reviews) {
  let _crrIndex = gQuotes.findIndex(obj => obj.id == id)
  gQuotes[_crrIndex].quote = quote
  gQuotes[_crrIndex].year = year
  gQuotes[_crrIndex].source = source
  gQuotes[_crrIndex].citation = citation
  gQuotes[_crrIndex].reviews = reviews
}


// get getRandomQuote
function getRandomQuote() {
  var randNum = getRandomInt(0, 5);
  // console.log('randNum',randNum)
  return gQuotes[randNum]
}


function printQuote() {
  var _rendQwuot = getRandomQuote();
  console.log(_rendQwuot)
  var strHTML = ` <p class="quote">${_rendQwuot.quote}</p> 
        <p class="source">${_rendQwuot.source}`
  if (_rendQwuot.citation !== '') {
    strHTML += `<span class="citation">${_rendQwuot.citation}</span>`
  } 
  if (_rendQwuot.year.length === 4) {
    strHTML += `<span class="year">${_rendQwuot.year}</span>`
  }
  if(_rendQwuot.reviews >0){
    strHTML += `<span class="reviews">${_rendQwuot.reviews}</span>`
  }

  strHTML += `</p>`
  document.getElementById('quote-box').innerHTML = strHTML;
    randomBackgroundColors()
}





// get random int , not incclodes max 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/// rndome color by num 
function getRandomColor(){
  var randomColorGet =  Math.floor(Math.random()*16777215).toString(16);
  return randomColorGet

}


/// random color by name 

// function getRandomColor(){
//   var _Colors = ['red','green','blue','yellow','cyan',  'black']
//   var randomColorGet = _Colors[getRandomInt(0,6)]
//       return randomColorGet
// }


// randomBackgroundColors - 
function randomBackgroundColors(){
 var randomColor = getRandomColor() 
//  console.log('randomColor',randomColor)
  if(randomColor != gCrrColor){
    console.log('if treu randomColor',randomColor)
    gCrrColor = randomColor
    console.log('gCrrColor',gCrrColor)
  }else{
    // randomBackgroundColors()
    console.log('Else ')
  }

  document.body.style.backgroundColor = "#" + gCrrColor
  // console.log('randomColor',randomColor)
}

