function Logo({ variant = 'header' }) {
    const logos = {
        header: '/assets/logo-header.svg',
        footer: '/assets/logo-footer.svg'
    }
    const logo = logos[variant]

    return (
        <img
            src={logo}
            alt="Logo Digital-Store"
            className="w-[240px]"
        />
    )
}

export default Logo 
