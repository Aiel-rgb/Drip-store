function Produtos ({imagem , nome, preco, desconto}) {
    return(
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative bg-light-gray-3 h-[321px] flex items-center justify-center">
                <img
                src={imagem}
                alt={nome}
                className="w-full h-full object-cover"
                />
                {desconto && (
                <span className="absolute top-4 left-4 bg-warning text-dark-gray-2 px-3 py-1 rounded text-sm font-bold">
                    30% OFF
                </span>
            )}
            </div>
            <div className="p-4">
                <p className="text-xs text-light-gray mb-2"> Tênis </p>
                <h3 className="text-dark-gray-2 font-medium mb-3 line-clamp-2"> {nome} </h3>
                <div className="flex items-center gap-2">
                    {desconto ?(
                        <>
                        <span className="text-light-gray line-through text-sm"> 
                            R$ {preco}
                        </span>
                        <span className="text-dark-gray text-2xl font-bold"> 
                            R$ {desconto}
                        </span>
                        </>
                    ) : (
                        <span className="text-dark-gray text-2xl font-bold"> 
                            R$ {preco}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Produtos