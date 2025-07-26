let amigos =[];

function adicionarAmigo() {
   let nome = document.querySelector('input').value;

    if (nome.length == '') {
        alert('Por favor insira um nome');
    }else{
        amigos.push(nome);
        nome = document.querySelector('input').value = '';
        console.log(amigos);
    }
}