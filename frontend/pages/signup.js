import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link'

const Signup = () => {
    return(
        <Layout>
            <h2 className="text-center pt-4 pb-4">Signup</h2>
            <div className="row">
                <div style={Styles.signup_columns}>
                    <SignupComponent />
                </div>
            </div>
        </Layout>
    );
};

const Styles = {
    signup_columns: {
       marginLeft: "-80px",
       position: "absolute",
       left: "50%",
       right: "50%",
       width: "300px"
    }
};

export default Signup;