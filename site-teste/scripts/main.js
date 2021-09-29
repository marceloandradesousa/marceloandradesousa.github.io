const meucabecalho = document.querySelector('h1');
meucabecalho.textContent = 'Olá mundo!';

//------------------------------------------------------
let logo = document.querySelector('img');

logo.onclick = function(){
    let endereco = logo.getAttribute('src');
    if(endereco === 'imagens/firefox-icon.jpeg'){
      logo.setAttribute('src', 'imagens/firefox2.png')
    }else{
      logo.setAttribute('src','imagens/firefox-icon.jpeg')
    }

}
//----------------------------------------------------------------
let meubotao = document.querySelector('button');
let meucabecalho2 = document.querySelector('h1');

function definenomeusuario(){
  let meunome = prompt('Por favor, digite seu nome:');
  if(!meunome || meunome ===null){
    definenomeusuario();
  }else{
  localStorage.setItem('nome', meunome);
  meucabecalho2.textContent = 'Mozilla é legal, ' + meunome;
}
}

if(!localStorage.getItem('nome')){
  definenomeusuario();
}else{
let nomeguardado = localStorage.getItem('nome');
meucabecalho2.textContent = 'Mozilla é legal, ' + nomeguardado;
}
meubotao.onclick = function() {
  definenomeusuario();
}
//-------------------------------------------------------------------