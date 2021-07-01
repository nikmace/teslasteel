import Head from 'next/head';
import ContentInfo from '../../components/ContentInfo';


const Lale = () => {
    return (
        <main class="content">
            <Head>
              <title>Оранжерии | Лале</title>
             </Head>

             <ContentInfo text="ОРАНЖЕРИИ ОТ ПОЛИКАРБОНАТ ШИРОЧИНА 3 М" />
            <section class="product">
                <div class="product__wrapper">
                        <div class="product__wrapper-img">
                                <img src="/products/lale.jpeg" alt="Оранжерия"/>
                            
                        </div>
                    <div class="product__wrapper-info">
                        <div class="product__wrapper-info_name">
                            <h4>Оранжерия Лале с отварящ се покрив 3 монтаж</h4>
                            <p>Силна рамка и поликарбонат на висока плътност. Гарантирано дълъг експлоатационен живот!</p>
                        </div>

                        <h5>Технически спецификации:</h5>
                        <p>Дължина: 4м / 6м / 8м / 10м</p>
                        <p>Височина: 2 м</p>
                        <p>Растояние между дъгите: 67см</p>
                        <p>Вид на конструкция: Заварени панели, болтова връзка</p>
                        <p>Тръба: Поцинкован профил 40 х 20 мм</p>
                        <p>Поликарбонат: Многокамерен поликарбонат с УВ защита. Дебелина - 4 мм. Плътност - 600 гр/м2. Цвят – прозрачен</p>
                        <p>В комплекта са включени Т-образните крачета за закрепване в земята </p>
                    </div>
                </div>
            </section>
            
            <section class="prices">
                <h2>Цени</h2>
                <div class="cards">
                    <div class="cards__item">
                        <h4>Лале 4м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>1590 лв</h3>
                        <p>Размер: 3 х 4 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div class="cards__item">
                        <h4>Лале 6м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>2090 лв</h3>
                        <p>Размер: 3 х 6 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div class="cards__item">
                        <h4>Лале 8м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>2590 лв</h3>
                        <p>Размер: 3 х 8 х 2</p>
                        <span>в наличност</span>
                    </div>
    
                    <div class="cards__item">
                        <h4>Лале 10м</h4>
                        <img src="check.svg" alt="check"/>
                        <h3>3090 лв</h3>
                        <p>Размер: 3 х 10 х 2</p>
                        <span class="outofstock">в наличност</span>
                    </div>
                </div>
            </section>

            <section class="additional-info">
                <h2>Допълнителна информация</h2>
                <p>Закрепване на поликарбонат с поцинковани самонеразни винтове с гумено уплътнение и шайба</p>
                <p>При монтаж на оранжерията на ветровити места, е необходимо допълнително закрепване за земята с подръчни материали</p>
                <p>Гаранционен срок 5 години</p>
                <p>Монтаж - по инструкцията или с помоща на нашите майстор</p>
            </section>
        </main>
    )
}

export default Lale;
