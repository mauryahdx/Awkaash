

const Login = () => {
    return (
        <div>
            <form action="submit" method="post">
                <div>
                <label htmlFor="username">Username :</label>
                <input type="text" name="username"/><br />
                </div>
                <div>
                <label htmlFor="pass">Password :</label>
                <input type="password" name="pass"/><br />
                </div>


                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
