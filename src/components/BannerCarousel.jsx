import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        tag: 'Melhores ofertas personalizadas',
        title: <>Queima de<br />Estoque Nike 🔥</>,
        description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        image: '/tenis-nike-2.svg',
        bgColor: 'bg-pink-100',
        tagColor: 'text-pink-600',
    },
    {
        id: 2,
        tag: 'Lançamento exclusivo',
        title: <>Nova Coleção<br />Air Max 2024 ❤️</>,
        description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        image: '/tenis-nike-3.svg',
        bgColor: 'bg-red-200',
        tagColor: 'text-red-600',
    },
    {
        id: 3,
        tag: 'Edição limitada',
        title: <>Jordan<br />Retro Series 🏀</>,
        description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        image: '/tenis-nike-1.svg',
        bgColor: 'bg-orange-100',
        tagColor: 'text-orange-600',
    },
    {
        id: 4,
        tag: 'Performance máxima',
        title: <>Nike Running<br />Pro Elite 💚</>,
        description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        image: '/tenis-nike-4.png',
        bgColor: 'bg-green-100',
        tagColor: 'text-green-600',
    },
];

function BannerCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

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
            <div className="h-auto md:h-[681px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12 md:px-24 md:py-0">

                <div className="z-10 order-1 md:order-none text-center md:text-left">
                    <p className={`${slide.tagColor} text-sm md:text-base font-bold mb-4`}>
                        {slide.tag}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-dark-gray mb-6 leading-[1.1]">
                        {slide.title}
                    </h1>
                    <p className="text-dark-gray-2 mb-10 text-base md:text-lg leading-relaxed">
                        {slide.description}
                    </p>
                    <button className="bg-primary text-white px-10 md:px-14 py-3 md:py-4 rounded-lg font-bold text-base hover:bg-tertiary transition w-full md:w-auto">
                        Ver Ofertas
                    </button>
                </div>

                <div className="flex items-center justify-center relative h-[300px] md:h-full order-2 md:order-none">
                    <img
                        key={slide.id}
                        src={slide.image}
                        alt="Tênis Nike"
                        className="w-full h-full max-h-[300px] md:max-h-full object-contain animate-fade-in-up [animation-delay:0s] hover:animate-float md:w-[900px] md:max-w-none md:scale-100"
                        style={{
                            animation: 'fadeInUp 0.6s ease-out forwards, float 3s ease-in-out 0.6s infinite'
                        }}
                    />
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
                <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
                <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

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
