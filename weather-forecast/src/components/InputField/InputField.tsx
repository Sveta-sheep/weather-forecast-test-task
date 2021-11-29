import React, { useEffect, useRef, useState } from 'react';
import { getCurrentWeather } from '../../redux/weatherReducer';
import { capitalize } from '../../utils/capitalize';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import clsx from 'clsx';
import s from './InputField.module.css';

const InputField = () => {
    const firstLoad = useRef(true)
    const timeout = useRef<NodeJS.Timeout | null>(null)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.errorMessage)

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
            <input className={clsx({[s.errorInput]: error}, s.input)} type="text" value={value} onChange={handleChange} />
            {!!error && <div className={s.error}>{capitalize(error)}</div>}
        </div>
    )
}

export default InputField;
