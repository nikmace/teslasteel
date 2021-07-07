import Head from 'next/head';
import styles from '../../styles/Heading.module.scss';

const Contacts = () => {
    return (
        <main className="content">
            <Head>
            <title>TeslaSteel | Контакти</title>
            </Head>
        <div className="content__info">
            <h1 className="content__heading">
                <span className={styles.span}>Контакти</span>
            </h1>
            <div className="delivery__container">
                <div className="delivery__container-item">
                    <div className="delivery__container-item--text">
                        <h3>Офис София:</h3>
                        <p><a href="tel:+359 886 254 676">Моб.: +(359) 886 254 676</a></p>
                        <p><a href="mailto:info@teslasteel.eu">info@teslasteel.eu</a></p>
                        <p>Адрес: България, София 1407, ул. Кишинев 7, офис 1</p>
                    </div>
                </div>

                
                <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.7802550178217!2d23.314163176648886!3d42.66043372648961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa845934c66655%3A0x93edb1d105068b4c!2z0YPQuy4g4oCe0JrQuNGI0LjQvdC10LLigJwgN9CQLCAxNDA3INCl0LvQsNC00LjQu9C90LjQutCwLCDQodC-0YTQuNGP!5e0!3m2!1sru!2sbg!4v1625324818831!5m2!1sru!2sbg" width="800" height="600" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>

            <div className="delivery__container">
                <div className="delivery__container-item">
                    <div className="delivery__container-item--text">
                        <h3>Производствена база в Кюстендил Румъния:</h3>
                        <p><a href="tel:+40 751 514 457">Моб.: +40 751 514 457</a></p>
                        <p><a href="mailto:info@teslasteel.eu">info@teslasteel.eu</a></p>
                        <p>Адрес: Strada Verde nr.39, Constanta 900328, Romania</p>
                    </div>
                </div>

                
                <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.494595423171!2d28.597483351414517!3d44.17627547900435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40baef8badbcb07f%3A0xbed7102a79b534a0!2zU3RyYWRhIFZlcmRlIDM5LCBDb25zdGFuyJthLCDQoNGD0LzRi9C90LjRjw!5e0!3m2!1sru!2sbg!4v1625661312021!5m2!1sru!2sbg" width="800" height="600" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
        
        </main>
    )
}

export default Contacts;
