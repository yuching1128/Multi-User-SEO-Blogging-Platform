import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = () => {
    return(
        <Layout>
            <h2 className="text-center pt-4 pb-4">Signin</h2>
            <div className="row">
                <div style={Styles.signin_columns}>
                    <SigninComponent />
                </div>
            </div>
        </Layout>
    );
};
const Styles = {
    signin_columns: {
        marginLeft: "-80px",
        position: "absolute",
        left: "50%",
        right: "50%",
        width: "300px"
    }
};

export default Signin;