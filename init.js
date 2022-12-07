let current=document.querySelector('#currentCharacter')


let player=new Character({id:0,size:100, ctx: current})
player.startIdle(100)

function turnCharacter(step){
    player.switchCharacter(step)
}