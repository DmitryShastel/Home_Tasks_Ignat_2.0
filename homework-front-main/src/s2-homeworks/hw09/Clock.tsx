import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [timer, setTimer] = useState<any>()
    let [stopButn,setstopButn]=useState(true)
    let [startButn,setstartButn]=useState(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

        setInterval(() => setDate(new Date()), 1000);

        // return () => {
        //     clearInterval(timerId);
        // };

        setstopButn(false)
        setstartButn(true)
    }


    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timer);
        setstopButn(true)
        setstartButn(false)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    //time
    const formatTime = (time: number): string => {
        return time < 10 ? `0${time}` : `${time}`
    }

    let hours: string = formatTime(date.getHours());
    let minutes: string = formatTime(date.getMinutes());
    let seconds: string = formatTime(date.getSeconds());


    //date
    const formatDate = (time: number): string => {
        return time < 10 ? `0${time}` : `${time}`
    }

    let day: string = formatDate(date.getDate())
    let month: string = formatDate(date.getMonth() + 1)
    let year: string = formatDate(date.getFullYear())

    //day
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dayOfWeek = daysOfWeek[date.getDay()]

    //month
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let currentMonth = months[date.getMonth()]


    const stringTime = `${hours}:${minutes}:${seconds}`   //'date->time' || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${day}.${month}.${year}`     //'date->date' || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = dayOfWeek    //'date->day' || <br/> // пишут студенты
    const stringMonth = currentMonth          //'date->month' || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                            {/*<span id={'hw9-month'}>{stringMonth}</span>,{' '}*/}
                            {/*<span id={'hw9-date'}>{stringDate}</span>*/}
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={startButn} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={stopButn} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
