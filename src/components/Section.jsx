import { Link } from "react-router-dom"

function Section({ title, titleAlign = 'left', link, children }) {
    return (
        <section className="mb-12">
            <div className={`flex items-center justify-between mb-2 p-8 `}>
                <h2 className={`text-2xl font-bold text-dark-gray-2 ${titleAlign === 'center' ? 'text-center w-full' : 'text-left'}`}>
                    {title}
                </h2>
                {link && titleAlign !== 'center' && (
                    <Link to={link.href} className="text-primary text-lg hover:underline">
                        {link.text}
                    </Link>
                )}
            </div>
            {children}
        </section>
    )
}

export default Section
