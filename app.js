let amigos =[];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let checkboxExluirSorteados = document.querySelector('.checkbox');
let amigo = document.getElementById('amigo');

amigo.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
})

function adicionarAmigo() {
   let nome = document.querySelector('input').value;

    if (nome.length == '') {
        alert('Por favor insira um nome');
    }else{
        amigos.push(nome);
        atualizaListaAmigos();
        nome = document.querySelector('input').value = '';
    }
}

function atualizaListaAmigos() {  
        listaAmigos.innerHTML=''; 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        const br = document.createElement('button');
        br.id = 'removeAmigo'
        li.textContent = amigos[i];
        br.textContent = 'remover';
        br.addEventListener('click', ()=> {
           remover(i);
        })
        listaAmigos.appendChild(li).appendChild(br);
    }
}

function remover(amigo) {
         amigos.splice(amigo, 1);
        atualizaListaAmigos();
    }

function sortearAmigo() {
    let numeroDoSorteio = gerarNumeroAleaotiro();

    if (amigos.length != 0) {
        for(let i =0; i < amigos.length; i++){
            if (i == numeroDoSorteio) {
                resultado.innerHTML = `Amigo sorteado foi: ${amigos[i]}`;
                checkboxExluirSorteados.checked ? amigos.splice(numeroDoSorteio, 1) : null;
                console.log(checkboxExluirSorteados);
                
                atualizaListaAmigos();
            }
        }
        
    }else{
        resultado.innerHTML = '';
        alert('Não existe nome para sorteio. Adicione um nome!');
        
    }
}

function gerarNumeroAleaotiro() {
    return parseInt(Math.random() * amigos.length);
}
