function Section ({ title, titleAlign = 'left', link, children}){
    return(
        <section className="mb-12">
            <div className={`flex items-center justify-between mb-2 p-8 `}>
                <h2 className={`text-2xl font-bold text-dark-gray-2`}>
                    {title}
                </h2>
                {link && titleAlign !== 'center' && (
                    <a href={link.href} className="text-primary text-lg hover:underline">
                        {link.text}
                    </a>
                )}
            </div>
            {children}
        </section>
    )
}

export default Section
