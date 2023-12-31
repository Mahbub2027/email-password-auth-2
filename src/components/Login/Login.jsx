import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const {signinUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signinUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');

        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleSignIn= () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New Here? Please <Link className="text-blue-700 underline" to='/register'>Regiser</Link></p>
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost">Log in with Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;