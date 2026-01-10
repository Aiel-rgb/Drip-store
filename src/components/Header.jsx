import { NavLink, Link } from "react-router-dom"
import Logo from "./Logo"
import { useState } from "react"

export function HeaderSimples() {
    return (
        <header className="bg-white shadow-sm py-6">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[40px]">
                <Logo variant="header" />
            </div>
        </header>
    )
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm relative z-[999]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-4 md:mb-6">

                    <div className="flex items-center justify-between w-full md:w-auto">
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6 text-dark-gray-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <Logo />

                        <button className="relative md:hidden">
                            <img src="/assets/mini-cart.svg" />
                            <span className="absolute -top-2 -right-2 bg-error text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>
                    </div>

                    <div className="flex-1 w-full md:w-auto max-w-none md:max-w-[560px]">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pesquisar produto"
                                className="w-full h-[40px] md:h-[60px] px-4 bg-light-gray-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                <img
                                    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                                    src="/assets/icons8-pesquisar.svg"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/cadastro" className="text-dark-gray-2 underline text-base"> Cadastre-se </Link>
                        <Link to="/login" className="bg-primary text-white font-bold w-[114px] h-[40px] rounded-lg flex items-center justify-center hover:bg-tertiary transition">
                            Entrar
                        </Link>
                        <button className="relative">
                            <img src="/assets/mini-cart.svg" />
                            <span className="absolute -top-2 -right-2 bg-error text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>
                    </div>
                </div>

                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 md:items-center py-4 md:py-0`}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2 w-fit"
                                : "text-dark-gray-2 hover:text-primary pb-2 w-fit"
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/produtos"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2 w-fit"
                                : "text-dark-gray-2 hover:text-primary pb-2 w-fit"
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2 w-fit"
                                : "text-dark-gray-2 hover:text-primary pb-2 w-fit"
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Categorias
                    </NavLink>
                    <NavLink
                        to="/meus-pedidos"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary font-bold border-b-2 border-primary pb-2 w-fit"
                                : "text-dark-gray-2 hover:text-primary pb-2 w-fit"
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Meus pedidos
                    </NavLink>

                    <div className="md:hidden flex flex-col gap-4 mt-4 border-t pt-4">
                        <Link to="/cadastro" className="text-dark-gray-2 underline text-base" onClick={() => setIsMenuOpen(false)}> Cadastre-se </Link>
                        <Link to="/login" className="bg-primary text-white font-bold w-full h-[40px] rounded-lg flex items-center justify-center hover:bg-tertiary transition" onClick={() => setIsMenuOpen(false)}>
                            Entrar
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header