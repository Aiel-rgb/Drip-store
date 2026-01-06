import Section from "../components/Section";
import ProdutoLista from "../components/ProdutoLista";
import BannerCarousel from "../components/BannerCarousel";

function HomePage() {
    const produtosEmAlta = [
        {
            id: 1,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 2,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 3,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 4,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/product-thumb-1.jpeg',
            price: 200,
            discount: 100
        },
        {
            id: 5,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 6,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 7,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 8,
            nome: 'K-Swiss V8 - Masculino',
            image: '../public/assets/produto1.jpg',
            price: 200,
            discount: 100
        }
    ]

    return (
        <div>
            <BannerCarousel />


            <Section title="Coleções em destaque" titleAlign="left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="../public/public/collection-1.png" alt="Novo drop Supreme" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">
                                30% OFF
                            </span>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="../public/public/collection-2.png" alt="Coleção Adidas" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">30% OFF</span>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="../public/public/collection-3.png" alt="Coleção Adidas" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">30% OFF</span>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Coeleção em destaque" titleAlign="center"/>
        </div>
    )
}

export default HomePage