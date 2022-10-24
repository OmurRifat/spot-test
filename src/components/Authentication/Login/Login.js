import React, { useContext } from 'react';
import { AuthContext } from '../../../userContext/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const { googleLogIn, setUser } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogIn(googleProvider)
            .then(result => {
                setUser(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div>
            <Link to=''><button onClick={ handleGoogleLogin } type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login or Register</button></Link>
        </div>
    );
};

export default Login;