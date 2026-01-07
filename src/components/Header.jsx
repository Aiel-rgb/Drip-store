import { NavLink } from "react-router-dom"
import Logo from "./Logo"

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-[1440px] mx-auto px-8 py-6">
                <div className="flex items-center justify-between gap-8 mb-6">
                    <Logo />
                    <div className="flex-1 max-2-[560px]">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pesquisar produto"
                                className="w-full h-[60px] px-4 bg-light-gray-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                <img
                                    className="w-[24px] h-[24px]"
                                    src="/assets/icons8-pesquisar.svg"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-dark-gray-2 underline text-base"> Cadastre-se </a>
                        <button className="bg-primary text-white font-bold w-[114px] h-[40px] rounded-lg">
                            Entrar
                        </button>
                    </div>
                    <button className="relative">
                        <img src="/assets/mini-cart.svg" />
                        <span className="absolute -top-2 -right-2 bg-error text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            2
                        </span>
                    </button>
                </div>
                <nav className="flex gap-8">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2"
                                : "text-dark-gray-2 hover:text-primary pb-2"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/produtos"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2"
                                : "text-dark-gray-2 hover:text-primary pb-2"
                        }
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2"
                                : "text-dark-gray-2 hover:text-primary pb-2"
                        }
                    >
                        Categorias
                    </NavLink>
                    <NavLink
                        to="/meus-pedidos"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2"
                                : "text-dark-gray-2 hover:text-primary pb-2"
                        }
                    >
                        Meus pedidos
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header