function Logo ({variant = 'header'}) {
    const  logos ={
        header: '../public/assets/logo-header.svg',
        footer: '../public/assets/logo-footer.svg'
    }
    const logo = logos[variant]

    return(
        <img
        src={logo}
        alt="Logo Digital-Store"
        className="w-[240px]"
        />
    )
}

export default Logo 
