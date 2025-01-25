//NAVEGAÇÃO MENU DA PÁGINA DE PROJETOS
function goFrontEnd(){
    window.location.href = "projetos.html";
}

function goUiDesign(){
    window.location.href = "projetos-uidesign.html";
}

function goNoCode(){
    window.location.href = "projetos-no-code.html";
}

function goBackSite(){
    window.location.href = "index.html";
}

//---------------------------------------------------------------------------------

//NAVEGAÇÃO MENU PRINCIPAL
 //Fazendo o scroll de um elemento para um elemento referenciado por um seletor
function scrollTo (element){
    document.querySelector(element).scrollIntoView ({ Behavior: "smoth" });
}

//localizando o item (link) clicado através do evento de CLICK
document.querySelector('#scroll-projetos').addEventListener('click', function(event) {
    event.preventDefault(); //desabilita o comportamento normal do navegador (navegar para um link)
    scrollTo(".container-hero-bottom");
});

document.querySelector('#scroll-stacks').addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(".container-stacks");
});

document.querySelector('#scroll-quem-sou').addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(".container-quem-sou");
});



