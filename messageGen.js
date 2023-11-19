/*   MESSAGE GENERATOR */

let mgPart1 =["I'm graitfull", "For the future"];
let mgPart2 =["want to be", "help people"];
let mgPart3 =["great", "hope", "happy", "friend"];



const randomParts= arr => {

   let radNum = Math.floor(Math.random()*arr.length);
   return arr[radNum];

} // //


const generateMessage=(part1, part2, part3  )=>{
    return `${randomParts(part1)} ${randomParts(part2)} ${randomParts(part3)} `;
} // //


//console.log( randomParts(mgPart1) );
console.log( generateMessage(mgPart1,mgPart2, mgPart3 ) );