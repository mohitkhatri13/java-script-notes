//how to use reduce in javascript

const users = [
     { firstName: "Mohit", lastName: "Khatri", age: 26 },
     { firstName: "harsh", lastName: "batra", age: 75 },
     { firstName: "ayush", lastName: "rawal", age: 50 },
     { firstName: "naman", lastName: "jain", age: 26 }
];

const output = users.reduce(function (acc, curr) {
     if (curr.age < 30) {
          acc.push(curr.firstName)
     }
     return acc;
}, []);
console.log(output);







// how to fetch a api 

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
async function showweather() {

     try {
          let city = "goa";
          let lat = 26.9124336;
          let lon = 75.7872709;
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
          const output = await response.json();
          console.log(output);

          //to render the data on ui
          renderinformation(output);}

catch (err) {
          console.log("erroroccured", err);
     }}








// how to render api data on ui
function renderinformation(data){
      let newPara = document.createElement('p');
      newPara.textContent = `${data?.main?.temp.toFixed(2)}`
      document.body.appendChild(newPara);
}






// how to fetch our current lattttitude and longitude 
// answer =  it  is fetched by using a geolocation API
// geolocation first humse permission mangega
function getLocation(){
      if(navigator.geolocation){  // if is use that is out system  or browser support geolocation or not
        navigator.geolocation.getCurrentPosition(showPosition);
      }
      else{
          console.log("no geolocation Support");
      }
}

function showPosition(position){
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log(lat);
      console.log(long);
}




