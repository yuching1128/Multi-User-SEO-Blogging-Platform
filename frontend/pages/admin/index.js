import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';

import Link from 'next/link';

const AdminIndex = () => {
    return (
        <Layout>
            <link rel="stylesheet" href="/static/css/styles.css" />
            <Admin>
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    Create Category
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    Create Tag
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">right</div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;