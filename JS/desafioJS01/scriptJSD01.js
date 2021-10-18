window.onload = function(){

    const produtos = [
        {descricao:'Mamão Papaia', preco:5.20},
        {descricao:'Laranja', preco:3.20},
        {descricao:'Manga', preco:4.20},
        {descricao:'Melão', preco:3.80},
        {descricao:'Melancia', preco:3.80}
    ]

    /* Funçao que inclui dinamicamente os elementos produtos na "Lista de Produtos"*/
    const listaProdutos = document.querySelector("#listaProdutos");
    ( ()=>{
        for( let pro of produtos ){
            const filhoLi = document.createElement('li');
            for( listaP in pro ){
                if( listaP == 'preco' ){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP] );
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}` ;  
                }
            }
        }
    } )(produtos);


    const ulPai = document.querySelectorAll("#listaProdutos");// pega o elemento pai
    ulPai.forEach(function(lista){

        
        lista.addEventListener('click',function(elemento){
            const cesta = document.querySelector("#cestaDoCliente");

            // console.log('Listando apenas o valor do campo nome')
            produtos.forEach(function(umProduto, posicao){//ex.: 0
                if (umProduto.descricao == elemento.target.innerHTML){
                    let li = document.createElement ('li');
                    cesta.appendChild(li).setAttribute('data-preco', umProduto.preco);
                    cesta.appendChild(li).textContent = elemento.target.innerHTML;
                }
            })

            // alert(elemento.target.innerHTML);
        })     

    })



   //calcular
   function calcular(idProduto, resultado){
    const preco          = document.querySelectorAll(`#${idProduto} > li`);
    const valorResultado = document.querySelector(`#${resultado}`);
    let totalzinho=0;
    for( let i of preco ){
       totalzinho += Number(i.dataset.preco);
    }
    valorResultado.value = totalzinho.toFixed(2);
 }

 function removerProdutos(idProduto){
    const lista = document.querySelectorAll(`#${idProduto} > li`);
    for(let produto of lista){
       produto.addEventListener('click',function(){
          calcular('cestaDoCliente','mostraTotalCompra');
       });
    }
 }




 calcular('cestaDoCliente','mostraTotalCompra');


}