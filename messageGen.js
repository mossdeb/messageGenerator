/*   MESSAGE GENERATOR */

/*Motivational Speach /vs Crazy talk */

let mgPart1 =["I'm graitfull", "For the future"];
let mgPart2 =["want to be", "help people"];
let mgPart3 =["great", "hope", "happy", "friend"];
///////////
let czPart1 =["Hey Dude", "Please cleen your nose"];
let czPart2 =["Some dome guys", "What do you want"];
let czPart3 =["Bubbles", "pencil", "food", "Burger"];
//////////

const randomParts= arr => {

   let radNum = Math.floor(Math.random()*arr.length);
   return arr[radNum];

} // //


const generateMessage=(part1, part2, part3  )=>{
    return `${randomParts(part1)} ${randomParts(part2)} ${randomParts(part3)} `;
} // //


const messageGen=(number)=>{

    if(number === 1){
        console.log( generateMessage(mgPart1,mgPart2, mgPart3 ) );

    }else if(number===2){

        console.log( generateMessage(czPart1,czPart2, czPart3 ) );
    }


}



messageGen(2);