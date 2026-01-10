function BannerOferta() {
    return (
        <div className="rounded-lg mb-12 relative overflow-hidden transition-colors duration-500 bg-white">
            <div className="h-auto md:h-[450px] lg:h-[681px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-12 lg:px-24 py-8 md:py-0">
                <div className="flex justify-center items-center order-2 md:order-1 relative h-[300px] md:h-full">
                    <img
                        src="/tenis-oferta.png"
                        alt="tenis-oferta"
                        className="w-full h-full object-contain md:w-auto md:h-auto"
                    />
                </div>

                <div className="order-1 md:order-2 text-center md:text-left">
                    <p className="text-primary font-bold mb-4">Oferta especial</p>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl text-dark-gray font-extrabold mb-6 leading-tight">
                        Air Jordan Edição de <br className="hidden md:block" />Colecionador
                    </h3>
                    <p className="mb-6 text-dark-gray-2 text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam cumque eaque enim, officia error dicta architecto porro! Hic laudantium modi mollitia asperiores quasi placeat vel iste autem possimus atque?
                    </p>
                    <button className="bg-primary text-white px-10 md:px-14 rounded-full font-bold h-12 hover:bg-tertiary transition w-full md:w-auto">
                        Ver oferta
                    </button>
                </div>
            </div>

        </div>
    );
}

export default BannerOferta;