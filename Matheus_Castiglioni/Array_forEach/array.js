console.log('Trabalhando com forEach');

const meusProdutos = [
    {descricao:'Mamão Papaia', preco:5.20},
    {descricao:'Laranja', preco:3.20},
    {descricao:'Manga', preco:4.20},
    {descricao:'Melão', preco:3.80},
    {descricao:'Melancia', preco:3.80}
]


console.log('Listando o array completo')
meusProdutos.forEach(umProduto => {//ex.: {nome: 'Mamão Papaia'}
    console.log(umProduto)
})

console.log('Listando apenas o valor do campo nome')
meusProdutos.forEach(umProduto => {//ex.: Mamão Papaia
    console.log(umProduto.descricao)
})

console.log('Listando o indice de cada parte do nome')
meusProdutos.forEach(function(umProduto, posicao){//ex.: 0
    console.log(`A parte ${umProduto.descricao} esta na posição ${posicao}`)
    console.log(posicao)  
})

console.log('Listando cada nome e o array completo')
meusProdutos.forEach((umProduto, posicao, arrayCompleto)=>{
    console.log(umProduto)
    console.log(posicao)  
    console.log(arrayCompleto)  

})
