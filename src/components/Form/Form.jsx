import React, {useEffect} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

export const Form = () => {

    const [country, setCountry] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [subject, setSubject] = React.useState('physical');
const{tg} = useTelegram()
    useEffect(() => {
tg.MainButton.setParams({
    text:'Отправить данные'
})
    }, []);

useEffect(() => {
    if (!street || !country) {
        tg.MainButton.hide()
    }else {
        tg.MainButton.show();
    }
})


    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }
    return (
        <div className={'form'}>
            <h3>Введите ваши данные </h3>
            <input className={'input'} type="text" placeholder={'Страна'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'Улица'} value={street} onChange={onChangeStreet}/>

            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value="physical">физ лицо</option>
                <option value="legal">юр лицо</option>
            </select>
        </div>
    );
};

