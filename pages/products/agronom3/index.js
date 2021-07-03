import Head from 'next/head';
import ContentInfo from '../../../components/ContentInfo';
import Image from 'next/image';


const Agronom3 = () => {
    return (
        <main className="content">
             <Head>
              <title>Оранжерии | Агроном Эко-Лукс</title>
             </Head>
             
             <ContentInfo text="ОРАНЖЕРИИ ОТ ПОЛИКАРБОНАТ ШИРОЧИНА 3 М" />
            <section className="product">
                <div className="product__wrapper">
                        <div className="product__container">
                                <div className="product__container-image">
                                    <Image objectFit="contain" width={700} height={600} src="/products/oranzheria3m.jpeg" alt="Оранжерия" />
                                </div>
                                <div className="product__container-image">
                                    <Image objectFit="contain" width={700} height={600} src="/products/oranzheria3m.jpeg" alt="Оранжерия" />
                                </div>
                                <div className="product__container-image">
                                    <Image objectFit="contain" width={700} height={600} src="/products/oranzheria3m.jpeg" alt="Оранжерия" />
                                </div>
                                <div className="product__container-image">
                                    <Image objectFit="contain" width={700} height={600} src="/products/oranzheria3m.jpeg" alt="Оранжерия" />
                                </div>
                            {/* <Image objectFit="contain" width={900} height={460} src="/products/oranzheria4m.jpeg" alt="Оранжерия" /> */}
                        </div>
                    <div className="product__wrapper-info">
                        <div className="product__wrapper-info_name">
                            <h4>Оранжерия АГРОНОМ Эко-Лукс Широчина 3 м</h4>
                            <p>Силна рамка и поликарбонат на висока плътност. Гарантирано дълъг експлоатационен живот!</p>
                        </div>

                        <h5>Технически спецификации:</h5>
                        <p>Дължина: 4м / 6м / 8м / 10м</p>
                        <p>Височина: 2,1 м</p>
                        <p>Растояние между дъгите: 67см</p>
                        <p>Вид на конструкция: Заварени панели, болтова връзка</p>
                        <p>Тръба: Поцинкован профил 40 х 20 мм</p>
                        <p>Тегло: 46кг на 4 метра + всяко удължаване на 2 метра 14,5кг</p>
                        <p>Поликарбонат: Многокамерен поликарбонат с УВ защита. Дебелина - 4 мм. Плътност - 600 гр/м2. Цвят – прозрачен</p>
                        <p>В комплекта са включени Т-образните крачета за закрепване в земята </p>
                    </div>
                </div>
            </section>
            
            <section className="prices">
                <h2>Цени</h2>
                <div className="cards">
                    <div className="cards__item">
                        <h4>Агроном 4м</h4>
                        <Image width={50} height={50} src="/check.svg" alt="check" />
                        <h3>990 лв</h3>
                        <p>Размер: 3 х 4 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div className="cards__item">
                        <h4>Агроном 6м</h4>
                        <Image width={50} height={50} src="/check.svg" alt="check" />
                        <h3>1190 лв</h3>
                        <p>Размер: 3 х 6 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div className="cards__item">
                        <h4>Агроном 8м</h4>
                        <Image width={50} height={50} src="/check.svg" alt="check" />
                        <h3>1390 лв</h3>
                        <p>Размер: 3 х 8 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div className="cards__item">
                        <h4>Агроном 10м</h4>
                        <Image width={50} height={50} src="/check.svg" alt="check" />
                        <h3>1590 лв</h3>
                        <p>Размер: 3 х 10 х 2</p>
                        <span>в наличност</span>
                    </div>
                </div>
            </section>

            <section className="additional-info">
                <h2>Допълнителна информация</h2>
                <p>Закрепване на поликарбонат с поцинковани самонеразни винтове с гумено уплътнение и шайба</p>
                <p>При монтаж на оранжерията на ветровити места, е необходимо допълнително закрепване за земята с подръчни материали</p>
                <p>Гаранционен срок 5 години</p>
                <p>Монтаж - по инструкцията или с помоща на нашите майстор</p>
            </section>
        </main>
    )
}

export default Agronom3
