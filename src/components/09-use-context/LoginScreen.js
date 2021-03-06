import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    return (
        <>
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-outline-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: 'Nicolas'
                })}
            >
                Login
            </button>
        </>
    )
}
