import React, {useState, useEffect} from 'react'
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from "next/router";

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: 'yuching1128@gmail.com',
        password: '123123',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                //save user token to cookie
                //save user info to localstorage
                //authenticate user
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const Styles = {
        signin_btn: {
            marginLeft: "50px",
            borderRadius: "10px"
        }

    };

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="formcontrol"
                        placeholder="Type your email"
                    />
                </div>
                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="formcontrol"
                        placeholder="Type your password"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" style={Styles.signin_btn}>Signin</button>
                </div>
            </form>
        )
    }

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </React.Fragment>
    );
};

export default SigninComponent;