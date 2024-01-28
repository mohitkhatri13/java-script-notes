//how to fetch different type of attributes by various mathods
// 1.class 

const tab = document.getElementsByClassName("class_nams");//it can fetch all element with same name of class and tab is work as array here
const tab = document.querySelector(".tab_name");

// for id
const tab2 = document.querySelector(".tab_name");
const tab3 = document.querySelector("[")
const tab= document.getElementById("example"); 

//by tag name
const y = x.getElementsByTagName("p");
const searchTab = document.querySelector("[data-searchweather]");




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








// how to render api data on UI
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




//how to add ot remove active class

let oldtab = //fetch an attribute 
oldtab.classList.add("name of active class");
//this is incss
// .classname of attribute."name of active class"{

// }

// for remove ?just use "remove" in place of add









//Link section
// 1. cdn link to obtain a flag from country instanceof;
attribute_name.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`; 
// ${weatherInfo?.sys?.country.toLowerCase() ye apne hisaab se dalte rehna

// 2  for weather icoom image 
//  weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;  