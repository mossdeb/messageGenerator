/*   MESSAGE GENERATOR */

/*Motivational Speach /vs Crazy talk */

let mgPart1 =["I'm graitfull", "For the future"];
let mgPart2 =["want to be", "help people"];
let mgPart3 =["great", "hope", "happy", "friend"];
///////////
let czPart1 =["Hey Dude", "Please clean your nose"];
let czPart2 =["Some guys", "What do you want"];
let czPart3 =["Bubbles", "pencil", "food", "Burger, Banana, ketchup, F**U!"];
//////////

const randomParts= arr => {

   let radNum = Math.floor(Math.random()*arr.length);
   return arr[radNum];

} // //


const generateMessage=(part1, part2, part3, type)=>{

    if(type===1){
        return `${randomParts(part1)} ${randomParts(part2)} ${randomParts(part3)} `;
    }else if (type===2){
        return `Dog:${randomParts(part1)}!  Cow:${randomParts(part2)}   Dog:${randomParts(part3)}! `;
    }


} // //


const messageGen=(number)=>{

    if(number === 1){
        console.log( generateMessage(mgPart1,mgPart2, mgPart3,number ) );

    }else if(number===2){

        console.log( generateMessage(czPart1,czPart2, czPart3,number ) );
    }


}



messageGen(2);