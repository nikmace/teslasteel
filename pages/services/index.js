import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/Heading.module.scss';

const Services = () => {
    return (
        <main className="content">
            <Head>
              <title>TeslaSteel | Услуги</title>
            </Head>
            <div className="content__info">
                <h1 className="content__heading">
                    <span className={styles.span}>Представени услуги</span>
                </h1>
                <div className="services__container">
                    <div className="services__container-item">
                        <Image src="/products/dostavka.jpeg" width="400" height="380" alt="Доставка" />
                        <div className="services__container-item--text">
                            <h3>СТОЙНОСТ НА ДОСТАВКА НА ОРАНЖЕРИИ</h3>
                            <p>до 50 км от София  - 50 лв.</p>
                            <p>до 100 км от София  - 70 лв.</p>
                            <p>до 150 км от София  - 100 лв.</p>
                            <p>до 200 км от София - 150 лв.</p>
                            <p>до 250 км от София - 180 лв.</p>
                            <p>до 300 км от София - 200 лв.</p>
                        </div>
                    </div>

                    <div className="services__container-item">
                        <Image src="/products/montazh.jpeg" width="400" height="380" alt="Доставка" />
                        <div className="services__container-item--text">
                            <h3>СТОЙНОСТ НА МОНТИРАНЕ НА ОРАНЖЕРИИ</h3>
                            <div className="services__container-item--text__block">
                                <div>
                                    <h5>Агроном - 3 м</h5>
                                    <p>3 х 4 - 180 лв.</p>
                                    <p>3 х 6 - 210 лв.</p>
                                    <p>3 х 8 - 240 лв.</p>
                                </div>
                                <div >
                                    <h5>Агроном - 4 м</h5>
                                    <p>4 х 6 - 220 лв.</p>
                                    <p>4 х 8 - 260 лв.</p>
                                    <p>4 х 10 - 300 лв.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__item">
                        <div className="services__item-text">
                            <h4>Оранжерия с отварящ се покрив Лале</h4>
                            <p>3 х 4 - 420 лв.</p>
                            <p>3 х 6 - 540 лв.</p>
                            <p>3 х 8 - 660 лв.</p>
                            <p>Монтиране задължително на дръвени гръди</p>
                        </div>

                        <div className="services__item-text">
                            <h4>Оранжерия с отварящ се покрив Лале</h4>
                            <p>3 х 4 - 420 лв.</p>
                            <p>3 х 6 - 540 лв.</p>
                            <p>3 х 8 - 660 лв.</p>
                            <p>Монтиране задължително на дръвени гръди</p>
                        </div>

                        <div className="services__item-text">
                            <h4>Оранжерия с отварящ се покрив Лале</h4>
                            <p>3 х 4 - 420 лв.</p>
                            <p>3 х 6 - 540 лв.</p>
                            <p>3 х 8 - 660 лв.</p>
                            <p>Монтиране задължително на дръвени гръди</p>
                        </div>
                    </div>

                    <div className="services__mount">
                        <div className="services__mount-text">
                            <h3>Монтиране на Т образни кръкчети </h3>
                            <p>1. При монтаж на оранжерията трябва да бъда равна и нивелирана площадка. Подгответе я преди да дойдат майстори за монтаж. Това ще спести време за всеки от вас. В монтаж се включва сглобяване на метална конструкция и покритие с поликарбонат както и качване на Т образни крачета в подготвени дупки с размер 20 см на 20 см и дълбочина 15 см през всеки 2 м. от вашата страна. </p>
                            <p>2. В случая ако искате да го монтираме ввърху дървена греда, подгответе я по размер на поисканата оранжерията. Парцел трябва да бъде нивелиран. </p>
                            <p>3. За да постигнете експлоатационния живот на дървена основа, лъч 100 х 100 мм трябва да бъде изсушен и обработен с антисептичен състав.</p>
                            <p>4. Задължително е да използвате битумна хидроизолация под дървения материал и отгоре на дървения материал.</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </main>
    )
}

export default Services;
