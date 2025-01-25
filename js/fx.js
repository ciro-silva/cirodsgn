function digiFx(elemento) {
    const arrayTxt = elemento.innerHtml.split('');
    elemento.innerHtml = '';
    arrayTxt.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHtml += letra;
        }, 75 * i);
    });
}



const txtFx = document.querySelector ('#txt-fx');
digiFx(txtFx);