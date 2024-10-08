import React, {useState} from 'react'
import s2 from '../../s2-homeworks/hw03/Greeting.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType
* 2 - указать нужный тип в useState с users
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 9 - в файле Greeting.tsx дописать типизацию пропсов
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */


export type UserType = {
    _id: number
    name: string
}

export const pureAddUserCallback = (name: string, setUsers: Function, users: UserType[]) => {
    const user = {
        _id: 100,
        name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            <hr/>
            {/*для автоматической проверки дз (не менять)*/}
            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW3
