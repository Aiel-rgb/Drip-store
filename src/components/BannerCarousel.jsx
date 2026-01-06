import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        tag: 'Melhores ofertas personalizadas',
        title: <>Queima de<br />Estoque Nike 🔥</>,
        description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        image: '/public/tenis-nike-1.svg',
        bgColor: 'bg-light-gray-3',
        tagColor: 'text-warning',
    },
    {
        id: 2,
        tag: 'Lançamento exclusivo',
        title: <>Nova Coleção<br />Air Max 2024 💙</>,
        description: 'Descubra o conforto e estilo da nova linha Air Max com tecnologia revolucionária.',
        image: '/public/tenis-nike-1.svg',
        bgColor: 'bg-blue-100',
        tagColor: 'text-blue-600',
    },
    {
        id: 3,
        tag: 'Edição limitada',
        title: <>Jordan<br />Retro Series 🏀</>,
        description: 'Os clássicos que marcaram época estão de volta. Garanta já o seu par.',
        image: '/public/tenis-nike-1.svg',
        bgColor: 'bg-red-100',
        tagColor: 'text-red-600',
    },
    {
        id: 4,
        tag: 'Performance máxima',
        title: <>Nike Running<br />Pro Elite 💚</>,
        description: 'Tecnologia de ponta para atletas que buscam superar seus limites.',
        image: '/public/tenis-nike-1.svg',
        bgColor: 'bg-green-100',
        tagColor: 'text-green-600',
    },
];

function BannerCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play: muda slide a cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

    return (
        <div className={`${slide.bgColor} rounded-lg mb-12 relative overflow-hidden transition-colors duration-500`}>
            <div className="h-[681px] grid grid-cols-2 gap-8 items-center px-24">

                <div className="z-10">
                    <p className={`${slide.tagColor} text-base font-bold mb-4`}>
                        {slide.tag}
                    </p>
                    <h1 className="text-7xl font-extrabold text-dark-gray mb-6 leading-[1.1]">
                        {slide.title}
                    </h1>
                    <p className="text-dark-gray-2 mb-10 text-lg leading-relaxed">
                        {slide.description}
                    </p>
                    <button className="bg-primary text-white px-14 py-4 rounded-lg font-bold text-base hover:bg-tertiary transition">
                        Ver Ofertas
                    </button>
                </div>

                <div className="flex items-center justify-center relative h-full">
                    <img
                        key={slide.id}
                        src={slide.image}
                        alt="Tênis Nike"
                        className="w-[900px] max-w-none h-[600px] object-contain animate-fade-in-up [animation-delay:0s] hover:animate-float"
                        style={{
                            animation: 'fadeInUp 0.6s ease-out forwards, float 3s ease-in-out 0.6s infinite'
                        }}
                    />
                </div>
            </div>

            {/* Setas de navegação */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
                <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
                <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicadores (bolinhas) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? 'bg-primary w-8'
                            : 'bg-dark-gray-2/30 hover:bg-dark-gray-2/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default BannerCarousel;
