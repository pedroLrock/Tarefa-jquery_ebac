const cadastrar = document.getElementById('cadastrar');
const inputTexto= document.getElementById('caixa');
const lista= document.getElementById('Lista');

cadastrar.addEventListener('click', function(){
    const texto= inputTexto.value;

    if(texto){
        const novaLinha = document.createElement('li');
        novaLinha.textContent = texto;
        novaLinha.classList.add('item')
        lista.appendChild(novaLinha);
        inputTexto.value = '';

        novaLinha.addEventListener('click',function(){
            novaLinha.classList.toggle('line-through');
        })

    } else{
        alert('Por favor digite uma tarefa para adicionar a lista.')
    }
})