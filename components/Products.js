import Link from 'next/link';
import styles from '../styles/Heading.module.scss';

const Products = () => {
    return (
        <>
            <div class="content__info">
                <h1 class="content__heading">
                    <span className={styles.span}>
                    Оранжерии
                    </span>
                </h1>
            </div>
            <div class="content__products">
                <div class="content__products-item">
                    <Link href="/various">
                        <a>
                            <img src="/products/kapanduri.png" alt="Product" />
                            <p>Капандури за оранжерии</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/various">
                        <a>
                            <img src="/products/profil.jpeg" alt="Product" />
                            <p>П - Профил за поликарбонат</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/various">
                        <a href="/lenta">
                            <img src="/products/lenta.png" alt="Product" />
                            <p>Перфорирана лента</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/mitlider">
                        <a>
                            <img src="/products/mitlider.jpeg" alt="Product" />
                            <p>Оранжерии Митлайдер</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/lale">
                        <a>
                            <img src="/products/lale.jpeg" alt="Product" />
                            <p>Оранжерии Лале с отварящ се покрив</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/agronom3">
                        <a>
                            <img src="/products/oranzheria.jpeg" alt="Product" />
                            <p>Оранжерии - Широчина 3м</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/strelka">
                        <a>
                            <img src="/products/strelka3m.jpeg" alt="Product" />
                            <p>Оранжерии - Широчина 3м</p>
                        </a>
                    </Link>
                </div>

                <div class="content__products-item">
                    <Link href="/agronom4">
                        <a>
                            <img src="/products/oranzheria.jpeg" alt="Product" />
                            <p>Оранжерии - Широчина 4м</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div class="contact-us">
                <p>Свържете се с нас по телефон <span>+359 886 254 676</span> или e-mail: <span><a href="mailto:info@teslasteel.eu">info@teslasteel.eu</a></span>, за да направите заявка, запитване за наличието на продукти или актуални цени или да поискате подкрепяща документация.</p>
            </div>
        </>
    )
}

export default Products;
