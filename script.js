 'use strict';
// const bookings=[];
// const cratebooking=function(flightnum,numPassegnger=1,price=199*numPassegnger){
//     const booking={
//         flightnum,
//         numPassegnger,
//         price
//     }
//     bookings.push(booking);
// }
// cratebooking("CB23");
// cratebooking("CB23",2,1000);
// console.log(bookings);
// const flight="LH345";
// const jonas={
//     name:'jonas',
//     passport:312132556456
// }
// const checking=function(flight,passanger){
//     flight='LH342'
//     passanger.name="Mr"+passanger.name;
// passanger.passport===312132556456?console.log("valid visitor"):console.log("not valid visitor");
// }
// const passport=function(person){
//  person.passport=Math.trunc(Math.random()*100000000000);
//  console.log(person.passport);
// return person;
// }
// passport(jonas);
// checking('LH667',jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord=function(str){
//     return str.replace('g/ /',''); 
// }
// const upperFirstCase=function(str){
//     const [first,...others]= str.split(" ");
//     return [first.toUpperCase(),...others].join();
// }
// const transform=function(str,fn){
//     console.log("original str:"+str);
// console.log('converted str:'+fn(str));
// console.log("called by:"+fn.name);}

// transform("hello from js",upperFirstCase);

// const greet = (gt)=>{
//     return  (name)=>{
//         console.log(`${gt} ${name} 👋`);
//     }
// }
// const grettrings= greet('hey');
// grettrings('om');
// greet('hello')('sfffsf');

// ////////////////////////////////CALL AND APPLY///////////////////////
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//       console.log(
//         `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//       );
//       this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
//   };
 
// //   lufthansa.book(52,'dabddhbd');
// const airIndia = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
//   };
//   const books= lufthansa.book;
//   books.call(airIndia,25,'bskadjka');
//   const arr=[25,'danjhdbja'];
//   books.apply(lufthansa,arr);
//   console.log(airIndia.bookings);

//   lufthansa.planes=300;
//   lufthansa.buyPlane=function(){
//  this.planes++;
//  console.log(this.planes);
//   }
//   const btn=document.querySelector('.buy'); 
// document.addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
// ///binding method:this methid will return a method after binding method with perticular obj 
// const l= books.bind(airIndia);
// l(28,'om');
// const tax=function(rate){
//  return function (val){
//     return val+val*rate;
//  };

// };
// const addVt=tax(0.23);
// console.log(addVt(200));
// console.log(tax(0.23)(2000));

//coding challange 1🚀
// let s='';
// const poll={
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         const ans=Number(prompt(`${this.question}\n ${s}`));
//         ans<=3?poll.answers[ans]++:alert('enter num between 0 to 3');
//         this.displyAnswer('array');
//     },

//     displayResults(type = 'array') {
//         if (type === 'array') {
//           console.log(this.answers);
//         } else if (type === 'string') {
//           // Poll results are 13, 2, 4, 1
//           console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//       }
    
// }

// for(let o of poll.options){
//      s=s+o+'\n';  
// }
// // document.querySelector('.poll').addEventListener('click',console.log("clicked"));
// const btn=document.querySelector('.poll');
// btn.addEventListener('click',poll.registerNewAnswer.bind(poll))
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


// (function(){
//     console.log("first called");
// })();


// const securebooking=function(){
//     let passangercount=0;
//      return function(){
//         passangercount++;
//         console.log(passangercount);
//      }
// }
// const book=securebooking();
// book();
// book();

// let f;
// const h=function(){
//     const a=23;
//     f= function(){
//         console.log(a*2);
//     }
// }
// const  g=function(){
//     const b=100;
//     f= function(){
//         console.log(b*3);
//     }
// }
// h();
// f();
// g();
// f();

// const boardPasses= function(wait,n){
//     const  passanger=n/3;
//     setTimeout(function(){
//         console.log(`now we are boarding total ${n}passanger`);
//         console.log(`there are three groups ${passanger}`);
//     },wait*2)
//     console.log("wait"+wait);
// }
// let passanger=1000;
// boardPasses(3,180);
(function (){
    const header= document.querySelector('h1');
    header.style.color='red';
    document.addEventListener('click',function(){
        header.style.color='blue';
    })
})();