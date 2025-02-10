const imgArray=['a.jpg', 'b.jpg','c.jpg','d.jpg','e.jpg']
const arrayLength = imgArray.length
let i = 0
const demoFunction =()=>{
    
     // i = i%arrayLength
    if (i >4){
        i=0
    }
    // i = 0%5 = 0, 1%5=1, 2%5=2
    document.querySelector('img').src=`img/${imgArray[i]}`
    i++
}
let set = setInterval(demoFunction, 3000)

document.querySelector('.container .right').addEventListener('click', ()=>{
   if (i >4){
       i=0
   }
   document.querySelector('img').src=`img/${imgArray[i]}`
   i++

})
document.querySelector('.container .left').addEventListener('click', ()=>{
  
    if(i<0){
        i=arrayLength-1
    }
   // i = 0%5 = 0, 1%5=1, 2%5=2
   document.querySelector('img').src=`img/${imgArray[i]}`
   i--

})

document.querySelector('.container').addEventListener('mouseover', ()=>{
    clearInterval(set)
})

document.querySelector('.container').addEventListener('mouseout',()=>{
    set = setInterval(demoFunction, 3000)
})