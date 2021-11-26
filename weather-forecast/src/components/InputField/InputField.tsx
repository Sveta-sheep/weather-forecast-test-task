import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather, setWeatherData } from '../../redux/weatherReducer';

import s from './InputField.module.css';

const InputField = () => {
    const firstLoad = useRef(true)
    const timeout = useRef<NodeJS.Timeout | null>(null)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false
            return 
        }

        timeout.current = setTimeout(() => {
            dispatch(getCurrentWeather(value))
        }, 2000);

        return () => {
            !!timeout.current && clearTimeout(timeout.current);
        }
    }, [value])

    return (
        <div>
            <input className={s.input} type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default InputField
