import Produtos from "./Produtos"

function ProdutoLista({ produtos }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((produto) => (
                <Produtos
                    key={produto.id}
                    imagem={produto.image}
                    nome={produto.nome}
                    preco={produto.price}
                    desconto={produto.discount}
                />
            ))}
        </div>
    )
}

export default ProdutoLista