const img_array = ['newcover.jpg', 'newcover1.jpg', 'newcover2.jpg', 'cover1.jpg']
let i = 0

const demoFunction = ()=>{
    if(i>3){
        i=0
    }

     document.querySelector('img').src = `img/${img_array[i]}`

     i++


}

let set = setInterval(demoFunction, 3000)