import Section from "../components/Section";
import ProdutoLista from "../components/ProdutoLista";
import BannerCarousel from "../components/BannerCarousel";
import BannerOferta from "../components/BannerOferta";


function HomePage() {
    const produtosEmAlta = [
        {
            id: 1,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 2,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 3,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 4,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 5,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 6,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 7,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        },
        {
            id: 8,
            nome: 'K-Swiss V8 - Masculino',
            image: '/tenis-p.jpg',
            price: 200,
            discount: 100
        }
    ]

    return (
        <div>
            <BannerCarousel />


            <Section title="Coleções em destaque" titleAlign="left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="/collection-1.png" alt="Novo drop Supreme" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">
                                30% OFF
                            </span>
                        </div>
                        <div className="absolute bottom-6 left-4">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white hover:scale-110 transition">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="/collection-2.png" alt="Coleção Adidas" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">30% OFF</span>
                        </div>
                        <div className="absolute bottom-6 left-4">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white hover:scale-110 transition">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[251px] rounded-lg overflow-hidden">
                        <img src="/collection-3.png" alt="Coleção Adidas" className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="bg-warning text-dark-gray-2 px-3 py-1 rounded-full text-sm font-bold">30% OFF</span>
                        </div>
                        <div className="absolute bottom-6 left-4">
                            <button className="bg-light-gray-3 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white hover:scale-110 transition">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </Section>


            <Section title="Coleção em destaque" titleAlign="center" />
            <div className="flex items-center justify-center">
                <ul className="flex flex-wrap md:flex-row justify-center gap-6 md:gap-12 mb-8 p-4 md:p-8">
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm md:shadow-none">
                            <img src="/assets/roupa.svg" alt="roupa" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm font-bold">Camisetas</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm md:shadow-none">
                            <img src="/assets/calca.svg" alt="calça" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm font-bold">Calças</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm md:shadow-none">
                            <img src="/assets/bone.svg" alt="cap" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm font-bold">Bonés</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm md:shadow-none">
                            <img src="/assets/fone.svg" alt="fone" className="w-8 h-8 md:w-10 md:h-10 hover:text-primary transition-colors" />
                        </a>
                        <span className="text-dark-gray-2 text-sm font-bold">Headphones</span>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <a href="#" className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm md:shadow-none">
                            <img src="/assets/sapato.svg" alt="sapato" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <span className="text-dark-gray-2 text-sm font-bold">Tênis</span>
                    </li>
                </ul>
            </div>

            <Section title="Produtos em alta" titleAlign="left" link={{ text: "Ver todos →", href: "/produtos" }}>
                <div className="px-4 md:px-8 bg-[#F5F5F5] md:bg-transparent -mx-4 md:mx-0 py-4 md:py-0">
                    <ProdutoLista produtos={produtosEmAlta} />
                </div>
            </Section>

            <BannerOferta />

        </div>
    )
}

export default HomePage