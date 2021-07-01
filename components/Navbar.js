import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src="logo-1.svg" alt="teslasteel" />
                        </a>
                    </Link>
                    
                    <div className="logo__info">
                        <h3>Tesla Steel Парници</h3>
                        <p>метални изделия и конструкции</p>
                    </div>
                </div>
                <div className="contacts">
                    <ul className="contacts__info">
                        <li>Моб. +359 886 254 676</li>
                        <li>info@teslasteel.eu</li>
                    </ul>
                    <div className="vl"></div>
                    <a className="contacts__link">
                        <img src="cart.svg" alt="Cart" />
                        ПОРЪЧАЙ
                    </a>
                </div>
            </div>

            <section className="navigation">
                <ul className="navigation__list">
                    <Link href="/about">
                        <li className="navigation__list-item">
                            <a>ЗА КОМПАНИЯТА</a>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="navigation__list-item ">
                            <a>ПРОДУКТИ</a>
                        </li>
                    </Link>
                    <Link href="/services">
                        <li className="navigation__list-item">
                            <a>УСЛУГИ</a>
                        </li>
                    </Link>
                    <Link href="/delivery">
                        <li className="navigation__list-item">
                            <a>ДОСТАВКА И ПЛАЩАНЕ</a>
                        </li>
                    </Link>
                    <Link href="/contacts">
                        <li className="navigation__list-item">
                            <a>КОНТАКТИ</a>
                        </li>
                    </Link>
                </ul>
            </section>
        </>
    )
}

export default Navbar;
