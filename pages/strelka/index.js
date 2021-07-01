import Head from 'next/head';
import ContentInfo from '../../components/ContentInfo';

const Strelka = () => {
    return (
        <main className="content">
            <Head>
              <title>Оранжерии | Стрелка</title>
            </Head>
            
            <ContentInfo text="ОРАНЖЕРИИ ОТ ПОЛИКАРБОНАТ ШИРОЧИНА 3 М"/>
            <section className="product">
                <div className="product__wrapper">
                        <div className="product__wrapper-img">
                                <img src="/products/strelka3m.jpeg" alt="Оранжерия"/>
                                
                        </div>
                    <div className="product__wrapper-info">
                        <div className="product__wrapper-info_name">
                            <h4>Оранжерия СТРЕЛКА ПЛЮС Широчина 3 м</h4>
                            <p>Силна рамка и поликарбонат на висока плътност. Гарантирано дълъг експлоатационен живот!</p>
                        </div>

                        <h5>Технически спецификации:</h5>
                        <p>Дължина: 4м / 6м / 8м </p>
                        <p>Височина: 2 м</p>
                        <p>Растояние между дъгите: 67см</p>
                        <p>Вид на конструкция: Заварени панели, болтова връзка</p>
                        <p>Тръба: Поцинкован профил 40 х 20 мм</p>
                        <p>Тегло: 43кг за 4 метра + всяко удължаване на 2 метра 12.3кг</p>
                        <p>Поликарбонат: Многокамерен поликарбонат с УВ защита. Дебелина - 4 мм. Плътност - 600 гр/м2. Цвят – прозрачен</p>
                        <p>В комплекта са включени Т-образните крачета за закрепване в земята </p>
                    </div>
                </div>
            </section>
            
            <section className="prices ">
                <h2>Цени</h2>
                <div className="cards three-cards">
                    <div className="cards__item">
                        <h4>Стрелка 4м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>990 лв</h3>
                        <p>Размер: 3 х 4 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div className="cards__item">
                        <h4>Стрелка 6м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>1190 лв</h3>
                        <p>Размер: 3 х 6 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div className="cards__item">
                        <h4>Стрелка 8м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>1390 лв</h3>
                        <p>Размер: 3 х 8 х 2</p>
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
                <p>Доставка по <span>предварителна</span> поръчка!</p>
            </section>
        </main>
    )
}

export default Strelka;
