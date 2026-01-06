import Section from "../components/Section";
import ProdutoLista from "../components/ProdutoLista";
import BannerCarousel from "../components/BannerCarousel";
import BannerOferta from "../components/BannerOferta";


function HomePage() {
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
        }
    ]

    return (
        <div>
            <BannerCarousel />


            <Section title="Coleções em destaque" titleAlign="left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="/public/collection-1.png" alt="Novo drop Supreme" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">
                                30% OFF
                            </span>
                        </div>
                        <div className="absolute bottom-2 left-4">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white hover:scale-110 transition">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="/public/collection-2.png" alt="Coleção Adidas" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">30% OFF</span>
                        </div>
                        <div className="absolute bottom-2 left-4">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white hover:scale-110 transition">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="/public/collection-3.png" alt="Coleção Adidas" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">30% OFF</span>
                        </div>
                        <div className="absolute bottom-2 left-4">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white hover:scale-110 transition">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </Section>


            <Section title="Coleção em destaque" titleAlign="center" />
            <div className="flex items-center justify-center">
                <ul className="flex flex-row gap-12 mb-8 p-8">
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-24 h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <img src="/assets/roupa.svg" alt="roupa" className="w-10 h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm">Camisetas</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-24 h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <img src="/assets/calca.svg" alt="calça" className="w-10 h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm">Calças</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-24 h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <img src="/assets/bone.svg" alt="cap" className="w-10 h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm">Bonés</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-24 h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <img src="/assets/fone.svg" alt="fone" className="w-10 h-10 hover:text-primary transition-colors" />
                        </a>
                        <span className="text-dark-gray-2 text-sm">Headphones</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-24 h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <img src="/assets/sapato.svg" alt="sapato" className="w-10 h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm">Tênis</span>
                    </li>
                </ul>
            </div>

            <Section title="Produtos em alta" titleAlign="left" link="Ver todos →">
                <div className="px-8">
                    <ProdutoLista produtos={produtosEmAlta} />
                </div>
            </Section>

            <BannerOferta />

        </div>
    )
}

export default HomePage