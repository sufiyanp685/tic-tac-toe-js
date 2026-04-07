let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtn = document.querySelector("#newgame-btn");
let msgcnt = document.querySelector(".msg-container");
let pmsg = document.querySelector("#msg");


let turno = true;  //playerx , playero

let WinningPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],


];
//5
let resetgame=()=>{
     turno =true;
    enableboxes();
    msgcnt.classList.add("hide");

}
//1
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       console.log("button was clicked");
       if(turno===true){
        box.innerText = "O";
        box.style.color = "orange" ;
        
        
        

        turno=false;
       }
       else{
        box.innerText= "X";
        box.style.color="red";
         turno= true; 
       }
       box.disabled = true;
       checkWinner();
    }) ;
});

//4disable boxes
let disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}
//6
let enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}
//3
let showWinner=(winner)=>{
    pmsg.innerText=`Congratulation the winner is ${winner}`;
    msgcnt.classList.remove("hide");
    disableboxes();


}
//2
let checkWinner=()=>{
    for( let pattern of WinningPatterns ){
       
        let val1 = boxes[pattern[0]].innerText; 
        let val2=boxes[pattern[1]].innerText; 
        let val3 =boxes[pattern[2]].innerText;
        if(val1 != "" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                console.log("Winner",val1);
                showWinner(val1);

            }
            
        }
        


    }

}
//7
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);