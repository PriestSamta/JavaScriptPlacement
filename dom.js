let h1=document.querySelector('h1')
let p= document.querySelector('p')
let h2= document.querySelector('h2')
let ul = document.querySelector('ul')


function getRandomcolour(){
    let letter='0123456789ABCDEF'
    let colour='#'
    for(let i=0;i<6;i++){
        let generateRandomColour=Math.floor(Math.random()*16)
        colour+= letter[generateRandomColour]
    }
    return colour
}