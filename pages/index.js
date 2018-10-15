import Head from "next/head";
import Layout from '../components/Layout';
import "../scss/style.scss";



const Home = (props) => {
    console.log(props);
    return (
        <Layout title='Home mage'>
            <section>
                <div>
                    <h1>Home page</h1>
                </div>
            </section>
        </Layout>
    );
};

Home.getInitialProps = async () => {
    return [
        {
          id: 1,
          name: 'cars'
        },
        {
          id: 2,
          name: 'jeeps'
        }
      ];
};

export default Home;