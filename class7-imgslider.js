const img_array = ['newcover.jpg', 'newcover1.jpg', 'newcover2.jpg', 'cover1.jpg']
const arrayLength = img_array.length
let i = 0

const demoFunction = ()=>{
    if(i>arrayLength-1){
        i=0
    }

     document.querySelector('img').src = `img/${img_array[i]}`

     i++


}

let set = setInterval(demoFunction, 3000)
document.getElementById('right').addEventListener('click', demoFunction)

document.getElementById('left').addEventListener('click', ()=>{
    if (i==0){
        i=arrayLength-1
    }
    document.querySelector('img').src = `img/${img_array[i]}`

    i--
})

document.querySelector('.container').addEventListener('mouseover', ()=>{
    clearInterval(set)
})

document.querySelector('.container').addEventListener('mouseout', ()=>{
    set = setInterval(demoFunction, 3000)
})

