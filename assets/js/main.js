const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

setInterval("window.location.reload()",60000);

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });