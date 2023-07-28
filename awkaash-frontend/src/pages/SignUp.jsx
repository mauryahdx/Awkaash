

const SignUp = () => {
    return (
        <div>
            <form action="submit" method="post">
                <div>
                <label htmlFor="name">Name :</label>
                <input type="text" name="name"/><br />
                </div>
                <div>
                <label htmlFor="email">Email :</label>
                <input type="text" name="email"/><br />
                </div>
                <div>
                <label htmlFor="pass">Password :</label>
                <input type="password" name="pass"/><br />
                </div>
                <div>
                <label htmlFor="repass">ReType Password :</label>
                <input type="password" name="repass"/><br />
                </div>


                <button>Signup</button>
            </form>
        </div>
    )
}

export default SignUp
