import Logo from "./Logo";

function Footer () {
    return(
        <footer className="bg-dark-gray text-white py-12">
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-32 mb-8">
                    <div className="md:col-span-1">
                        <div className="mb-6">
                            <Logo variant="footer" />
                        </div>
                        <p className="text-sm text-white mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur, enim sed similique, voluptatum distinctio quia dolor corrupti iste, recusandae fugit eos! Ducimus atque hic, iusto consequatur explicabo quia animi!
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-80"> <img src="../public/assets/facebook.svg" className="w-[24px] h-[24px]"/></a>
                            <a href="#" className="hover:opacity-80"> <img src="../public/assets/instagram.svg" className="w-[24px] h-[24px]"/></a>
                            <a href="#" className="hover:opacity-80"> <img src="../public/assets/twitter.svg" className="w-[24px] h-[24px]"/></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Informação</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Sobre Drip Store</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Segurança</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Wishlist</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Trabalhe conosco</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Meus Pedidos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Categorias</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Camisetas</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Calças</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Bonés</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Headphones</a></li>
                            <li><a href="#" className="text-sm hover:text-primary transition-colors">Tênis</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6"> Contato </h3>
                        <p className="text-sm mb-4">Av.Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p className="text-sm mb-2">(85) 3061-3411</p>
                    </div>
                </div>
                <hr className="border-dark-gray-2 my-8"/>
                <div className="text-center text-sm text-light-gray">
                    <p>&copy; 2022 Digital College</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
