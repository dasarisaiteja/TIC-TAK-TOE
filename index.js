const cells=document.querySelectorAll(".cell")


for(let cell of cells){
    cell.addEventListener("click",handledClick,{once:true})
}

let circleturn=true

function handledClick(event){
    let clickedcell=event.target

    let turn=circleturn?"o":"x"
    clickedcell.innerHTML=turn

    
    if(checkwin(turn)){
        document.querySelector(".msg_box").classList.add("show")
        document.querySelector(".winner_msg").innerHTML=`${turn} is WINNER`
    }
    else if (checkdraw(turn)) {
        document.querySelector(".msg_box").classList.add("show")
        document.querySelector("h3").innerHTML="MATCH DRAW"
    }
    else { 
        circleturn = !circleturn
    }
}

let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkwin(turn){

    return win.some((el)=>{

        return el.every((index)=>{

            return cells[index].innerHTML==turn
        })
    })
}

arr=[]

for (let item of cells){
    arr.push(item)
}

function checkdraw(){
     return arr.every((el)=>{
        return el.innerHTML=="x" || el.innerHTML=="o"
     })
}


function restart(){
    window.location.reload()
}