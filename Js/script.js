'use strict';

function typewriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML='';
    textArray.forEach((letter,i) => 
     setTimeout(() => (el.innerHTML += letter),55 * i) 
    );
}
typewriter(mensagem);