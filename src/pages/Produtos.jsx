import Section from "../components/Section";
import ProdutoLista from "../components/ProdutoLista";

const produtosEmAlta = [
    {
        id: 1,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 2,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 3,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 4,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 5,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 6,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 7,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 8,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 9,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 10,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 11,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    },
    {
        id: 12,
        nome: 'K-Swiss V8 - Masculino',
        image: '/public/tenis-p.jpg',
        price: 200,
        discount: 100
    }
]
function Produtos() {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 max-w-[1440px] mx-auto">
            <div className="w-full md:w-[308px] bg-white rounded-lg p-8 h-fit">
                <div className="mb-8">
                    <h3 className="font-bold text-dark-gray-2 text-base mb-4 border-b border-light-gray-2 pb-2">Filtrar por</h3>

                    <div className="mb-6">
                        <h4 className="font-bold text-dark-gray-2 text-sm mb-3">Marca</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="brand-adidas" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="brand-adidas" className="text-dark-gray-2 text-sm">Adidas</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="brand-balenciaga" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="brand-balenciaga" className="text-dark-gray-2 text-sm">Balenciaga</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="brand-kswiss" className="w-5 h-5 accent-primary border-gray-300 rounded" defaultChecked />
                                <label htmlFor="brand-kswiss" className="text-dark-gray-2 text-sm">K-Swiss</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="brand-nike" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="brand-nike" className="text-dark-gray-2 text-sm">Nike</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="brand-puma" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="brand-puma" className="text-dark-gray-2 text-sm">Puma</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold text-dark-gray-2 text-sm mb-3">Categoria</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="cat-esporte" className="w-5 h-5 accent-primary border-gray-300 rounded" defaultChecked />
                                <label htmlFor="cat-esporte" className="text-dark-gray-2 text-sm">Esporte e lazer</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="cat-casual" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="cat-casual" className="text-dark-gray-2 text-sm">Casual</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="cat-utilitario" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="cat-utilitario" className="text-dark-gray-2 text-sm">Utilitário</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="cat-corrida" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="cat-corrida" className="text-dark-gray-2 text-sm">Corrida</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold text-dark-gray-2 text-sm mb-3">Gênero</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="gen-masc" className="w-5 h-5 accent-primary border-gray-300 rounded" defaultChecked />
                                <label htmlFor="gen-masc" className="text-dark-gray-2 text-sm">Masculino</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="gen-fem" className="w-5 h-5 accent-primary border-gray-300 rounded" defaultChecked />
                                <label htmlFor="gen-fem" className="text-dark-gray-2 text-sm">Feminino</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="gen-unisex" className="w-5 h-5 accent-primary border-gray-300 rounded" />
                                <label htmlFor="gen-unisex" className="text-dark-gray-2 text-sm">Unisex</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-dark-gray-2 text-sm mb-3">Estado</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="estado" id="estado-novo" className="w-5 h-5 accent-primary border-gray-300" defaultChecked />
                                <label htmlFor="estado-novo" className="text-dark-gray-2 text-sm">Novo</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="estado" id="estado-usado" className="w-5 h-5 accent-primary border-gray-300" />
                                <label htmlFor="estado-usado" className="text-dark-gray-2 text-sm">Usado</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <ProdutoLista produtos={produtosEmAlta} />
            </div>
        </div>
    )
}

export default Produtos