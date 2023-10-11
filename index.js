// const box = document.getElementsByClassName("box")
// const result = document.getElementById("result")
// const mssage = document.getElementById("message")
// const button = document.getElementById("button")

// button.onclick = function(){
//     window.location.reload()
// }

// for(let i=0;i<box.length;i++){
//     box[i].addEventListener("click",()=>(handleText(i)))
// }
// let turn = "X"
// let count = 0;
// function handleText(index){
//     if(box[index].innerHTML==""){

//     if(count%2==0){
//         box[index].innerHTML = `<h1>${turn}</h1>`
//         turn = "O"
//     }else if(count%2!==0){
//         box[index].innerHTML = `<h1>${turn}</h1>`
//         turn = "X"
//     }
//     checkLogic()
//     count++;
// }

// }

// function checkLogic(){

//     if(box[0].innerText + box[1].innerText + box[2].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[0].innerText + box[1].innerText + box[2].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }
    
//     if(box[3].innerText + box[4].innerText + box[5].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[3].innerText + box[4].innerText + box[5].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }

//     if(box[6].innerText + box[7].innerText + box[8].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[6].innerText + box[7].innerText + box[8].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }

// //verticle complete//

//     if(box[0].innerText + box[3].innerText + box[6].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[0].innerText + box[3].innerText + box[6].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }

//     if(box[1].innerText + box[4].innerText + box[7].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[1].innerText + box[4].innerText + box[7].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }

//     if(box[2].innerText + box[5].innerText + box[8].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[2].innerText + box[5].innerText + box[8].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }

// //horizontal complete

//      if(box[0].innerText + box[4].innerText + box[8].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[0].innerText + box[4].innerText + box[8].innerText == "OOO"){
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//         console.log("O won")
//     }

//     if(box[6].innerText + box[4].innerText + box[2].innerText == "XXX"){
//         console.log("X won")
//         result.style.visibility = "visible"
//         message.innerText = "X won"
//     }else if(box[6].innerText + box[4].innerText + box[2].innerText == "OOO"){
//         console.log("O won")
//         result.style.visibility = "visible"
//         message.innerText = "O won"
//     }

// //cross complete
// }


const box = document.getElementsByClassName("box")
const result = document.getElementById("result")
const message = document.getElementById("message")
const button = document.getElementById("button")

button.onclick = function(){
    window.location.reload()
}

for(let i=0;i<box.length;i++){
    box[i].addEventListener("click" ,()=> {handleText(i)})
}

let finalResult = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
let xArray = []
let yArray = []

let turn = "X"
let count = 0 ;

function handleText(index){
   
    if(box[index].innerHTML==""){
   if(count%2==0){ 
    box[index].innerHTML = `<h1>${turn}</h1>`
        xArray.push(index)
        turn = "O"
        checkWinningCombination(finalResult,xArray,turn)
    }else if(count%2!==0){
        box[index].innerHTML = `<h1>${turn}</h1>`
        yArray.push(index)
        turn = "X"
        checkWinningCombination(finalResult,yArray,turn)
    }
    count++;
}

}

let flag = true

function checkWinningCombination(finalResult,array,turn){

    let gameArray = []

    for(let i=0;i<finalResult.length;i++){
        
        if(Array.isArray(finalResult[i])){
            checkWinningCombination(finalResult[i],array,turn)
        }else{

            if(array.includes(finalResult[i])){
                gameArray.push(true)
            }else{
                gameArray.push(false)
            }
        }
    }

    if(gameArray.every((el)=>el==true) && gameArray.length==3){
        result.style.visibility = "visible"
        message.innerText = `${turn=="X"?"O":"X"}Won`
        flag = false
    }
    
    if(count==8 && flag==true){
        result.style.visibility = "visible"
        message.innerText = "Its a Tie"
    }

}