import Layout from '../components/Layout';
import Link from 'next/link'

const Signup = () => {
    return(
        <Layout>
            <h2>Signup page</h2>
            <Link href="/">
                Home
            </Link>
        </Layout>
    );
};

export default Signup;