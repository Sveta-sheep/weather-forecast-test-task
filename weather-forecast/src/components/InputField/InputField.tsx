import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { getCurrentWeather } from '../../redux/weatherReducer';

import cn from 'classnames';
import s from './InputField.module.css';

const InputField = () => {
    const firstLoad = useRef(true)
    const timeout = useRef<NodeJS.Timeout | null>(null)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const error = useSelector<AppState, string>(state => state.weatherReducer.errorMessage)

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
        <div className={s.inputWrapper}>
            <input className={cn({[s.errorInput]: error}, s.input)} type="text" value={value} onChange={handleChange} />
            {!!error && <div className={s.error}>{error.replace(/./, error[0].toUpperCase())}</div>}
        </div>
    )
}

export default InputField
