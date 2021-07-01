import styles from '../styles/Heading.module.scss';

const ContentInfo = ({ text }) => {
    return (
        <div className="content__info">
                <h1 className="content__heading"><span className={styles.span}>{text}</span></h1>
                <p className="content__paragraph">Tesla Steel Ltd. ние Ви предлагаме оранжерии на високо качество на най-ниски цени в България!</p>
    
                <div className="content__paragraph-two">
                    <p>Оранжерия АГРОНОМ 40 Плюс - Широчина 4 м и АГРОНОМ Эко Лукс/Ботаник - Широчина 3 м.  в наличност от склада в София. </p>
                    <p>Стрелка и Премиум Височина 3 м. само по предварителна поръчка.</p>
                </div>
        </div>
    )
}

export default ContentInfo;
