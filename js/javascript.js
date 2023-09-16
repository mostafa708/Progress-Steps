const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; // نشان دهنده این هست که پروسه ما در مرحله 1 هست

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
        console.log(currentActive);
    }

    update();
})


prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})


function update(){
    for(let [idx,circle] of circles.entries()){
        if(idx < currentActive){
            circle.classList.add('active');
        } else{
            circle.classList.remove('active')
        }
    }
    
    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length -1) / (circles.length - 1) * 100 + '%'); 
  


    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}

