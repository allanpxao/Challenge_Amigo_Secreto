let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nomeAmigo);

    exibirAmigos();

    document.getElementById('amigo').value = '';
}

function exibirAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para sortear.');
        return;
    }

    const amigosSorteados = [...amigos];
    const resultados = [];

    for (let i = 0; i < amigos.length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * amigosSorteados.length);
        const sorteado = amigosSorteados.splice(indiceAleatorio, 1)[0]; // Remove o amigo sorteado

        resultados.push({ amigo: amigos[i], sorteadoCom: sorteado });
    }

    exibirResultado(resultados);
}

function exibirResultado(resultados) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    resultados.forEach(resultado => {
        const item = document.createElement('li');
        item.textContent = `${resultado.amigo} tirou ${resultado.sorteadoCom}`;
        resultadoLista.appendChild(item);
    });
}