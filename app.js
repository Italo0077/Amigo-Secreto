let amigos =[];

function adicionarAmigo() {
   let nome = document.querySelector('input').value;

    if (nome.length == '') {
        alert('Por favor insira um nome');
    }else{
        amigos.push(nome);
        nome = document.querySelector('input').value = '';
        atualizaListaAmigos(amigos);
        console.log(amigos);
    }
}

function atualizaListaAmigos(amigos) {
    
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos;
}