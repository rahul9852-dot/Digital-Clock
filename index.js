// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;




// created div for displaying time.
const clock = document.createElement("div");
document.body.appendChild(clock);



// function that calculate time.

const getTime = () =>{
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = ("0" + hour).slice(-2);
  min =  ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

  // converting into 12-hour format.

  let meridiem;

  if(hour > 12){
    meridiem = "PM";
    hour= hour-12;
  }else{
    meridiem="AM";
  }

  // insert time to our clock

  const time = hour + ":" + min + ":" +sec +" "+ meridiem;
  clock.innerText = time;
}

setInterval(getTime, 1000);

