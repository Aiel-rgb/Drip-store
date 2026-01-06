function BannerOferta() {
    return (
        <div className="rounded-lg mb-12 relative overflow-hidden transition-colors duration-500 bg-white">
            <div className="h-[681px] grid grid-cols-2 gap-8 items-center px-24">
                <img
                    src="/public/tenis-oferta.png"
                    alt="tenis-oferta"
                    className="w-[900px] max-w-none h-[600px]"
                />
                <div>
                    <p className="text-primary font-bold mb-4">Oferta especial</p>
                    <h3 className="text-6xl text-dark-gray font-extrabold mb-6">Air Jordan Edição de <br />Colecionador</h3>
                    <p className="mb-6 text-dark-gray-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam cumque eaque enim, officia error dicta architecto porro! Hic laudantium modi mollitia asperiores quasi placeat vel iste autem possimus atque?</p>
                    <button className="bg-primary text-white px-14 rounded-full font-bold h-12 hover:bg-tertiary transition">Ver oferta</button>
                </div>
            </div>

        </div>
    );
}

export default BannerOferta;