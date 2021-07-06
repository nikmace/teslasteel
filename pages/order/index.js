import React from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';

import styles from '../../styles/Heading.module.scss';

const Mailer = () => {
    const [values, setValues] = React.useState({});
    
    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        for (let i = 0; i < e.target.length - 1; i++) {
            console.log(e.target[i].value);
        }
       
    }

    return (
        <main className="content">
            <Head>
            <title>TeslaSteel | Поръчай</title>
            </Head>
        <div className="content__info">
            <h1 className="content__heading">
                <span className={styles.span}>Изпратете заявка и ще ви върнеме обаждане</span>
            </h1>
            
            <div className="order">
                <form className="form" onSubmit={onSubmitFormHandler}>
                    <h2>CONTACT US</h2>
                    <p type="Вашите имена:"><input type="text"  name="user_name" placeholder="Имена*" required></input></p>
                    <p type="Вашият имейл:"><input type="email" name="user_email" placeholder="Имейл*" required></input></p>
                    <p type="Вашият имейл:"><input type="tel" name="user_phone" placeholder="Телефон*" required></input></p>
                    <p type="Изберете оранжерията:">
                        <select>
                            <optgroup label="Agronom 3m">
                                <option value="Agronom 3 x 4">Agronom 3 x 4</option>
                                <option value="Agronom 3 x 6">Agronom 3 x 6</option>
                                <option value="Agronom 3 x 8">Agronom 3 x 8</option>
                                <option value="Agronom 3 x 10">Agronom 3 x 10</option>
                            </optgroup>
                            <optgroup label="Agronom 4m">
                                <option value="Agronom 4 x 4">Agronom 4 x 4</option>
                                <option value="Agronom 4 x 6">Agronom 4 x 6</option>
                                <option value="Agronom 4 x 8">Agronom 4 x 8</option>
                                <option value="Agronom 4 x 10">Agronom 4 x 10</option>
                            </optgroup>
                        </select>
                    </p>
                    <p type="Комментар:"><input type="text" defaultValue="None" name="user_comment" placeholder="Забелжки"></input></p>
                    <button type="submit">Изпрати</button>
                    <div>
                        <span className="fa fa-phone">Моб. +359 886 254 676</span>
                        <span className="fa fa-envelope-o"><a href="mailto:info@teslasteel.eu">info@teslasteel.eu</a></span>
                    </div>
                </form>
            </div>
        </div>
        
        </main>
    )
}

export default Mailer;
