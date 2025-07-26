let amigos =[];
let li = document.createElement('li');
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
   let nome = document.querySelector('input').value;

    if (nome.length == '') {
        alert('Por favor insira um nome');
    }else{
        amigos=[];
        amigos.push(nome);
        atualizaListaAmigos(amigos);
        nome = document.querySelector('input').value = '';
    }
}

function atualizaListaAmigos(amigos) {   
    amigos.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        listaAmigos.appendChild(li);
        console.log(amigos);
    });
    
}