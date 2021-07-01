import Link from 'next/link';
import styles from '../styles/Heading.module.scss';
import Image from 'next/image';

const Products = () => {
    return (
        <>
            <div className="content__info">
                <h1 className="content__heading">
                    <span className={styles.span}>
                    Оранжерии
                    </span>
                </h1>
            </div>
            <div className="content__products">
                <div className="content__products-item">
                    <Link href="/various">
                        <a>
                            <Image width={250} height={180} src="/products/kapanduri.png" alt="Product" />
                            <p>Капандури за оранжерии</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/various">
                        <a>
                            <Image width={250} height={180}  src="/products/profil.jpeg" alt="Product" />
                            <p>П - Профил за поликарбонат</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/various">
                        <a>
                            <Image width={250} height={180}  src="/products/lenta.png" alt="Product" />
                            <p>Перфорирана лента</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/mitlider">
                        <a>
                            <Image width={250} height={180}  src="/products/mitlider.jpeg" alt="Product" />
                            <p>Оранжерии Митлайдер</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/lale">
                        <a>
                            <Image width={250} height={180}  src="/products/lale.jpeg" alt="Product" />
                            <p>Оранжерии Лале с отварящ се покрив</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/agronom3">
                        <a>
                            <Image width={250} height={180}  src="/products/oranzheria.jpeg" alt="Product" />
                            <p>Оранжерии - Широчина 3м</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/strelka">
                        <a>
                            <Image width={250} height={180}  src="/products/strelka3m.jpeg" alt="Product" />
                            <p>Оранжерии - Широчина 3м</p>
                        </a>
                    </Link>
                </div>

                <div className="content__products-item">
                    <Link href="/agronom4">
                        <a>
                            <Image width={250} height={180}  src="/products/oranzheria.jpeg" alt="Product" />
                            <p>Оранжерии - Широчина 4м</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="contact-us">
                <p>Свържете се с нас по телефон <span>+359 886 254 676</span> или e-mail: <span><a href="mailto:info@teslasteel.eu">info@teslasteel.eu</a></span>, за да направите заявка, запитване за наличието на продукти или актуални цени или да поискате подкрепяща документация.</p>
            </div>
        </>
    )
}

export default Products;
