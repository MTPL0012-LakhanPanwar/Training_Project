import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username" />
                </label>

                <label>Enter your age:
                    <input
                        type="number"
                        name="age" />
                </label>
                <input type="submit" />
            </form>

        </div>
    )
}
