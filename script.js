const ZeGotinha = document.querySelector('.ZeGotinha');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyDown(event){
    if(event.keyCode === 38){
        if(!isJumping){
        jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);

        //Descendo
        let downInterval = setInterval(() => {
            if (position<=0){
                clearInterval(downInterval);
                isJumping = false;
            } else {
                position -= 20;
                ZeGotinha.style.bottom = position + 'px';
            }
        }, 25);
        }else {
        //Subindo
            position +=20;
            ZeGotinha.style.bottom = position + 'px';
        }
    }, 25);
}

function createCorona() {
    const Corona = document.createElement('div');
    let CoronaPosition = 900;
    let randomTime = Math.random() *9000;

    Corona.classList.add('Corona');
    Corona.style.left = 900 +'px';
    background.appendChild(Corona);

    let leftInterval = setInterval(() => {
        if (CoronaPosition <=-60) {
            clearInterval(leftInterval);
            background.removeChild(Corona);
        } else if (CoronaPosition > 0 && CoronaPosition < 60 && position < 40){
            // Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="Game-Over">Pegou COVID</h1>';
        } else {
            CoronaPosition -= 20;
            Corona.style.left = CoronaPosition + 'px';
        }    
    }, 25);

    setTimeout(createCorona, randomTime);
}

createCorona();
document.addEventListener('keydown', handleKeyDown);