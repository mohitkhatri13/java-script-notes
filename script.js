//how to use reduce in javascript

const users =[
     {firstName: "Mohit" , lastName: "Khatri" , age:26},
     {firstName:"harsh" , lastName:"batra" , age:75},
     {firstName:"ayush" , lastName:"rawal" , age:50},
     {firstName:"naman" , lastName:"jain" , age:26}
];
 
const output = users.reduce( function( acc, curr){
               if(curr.age<30){
                    acc.push(curr.firstName)
               }
               return acc;
} , []);
console.log(output);