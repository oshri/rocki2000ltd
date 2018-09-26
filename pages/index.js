import Head from "next/head";
import Header from '../components/Header';

import "../scss/style.scss";



const Home = (props) => {
    console.log(props);
    return (
        <section>
            <Head>
                <title>Hello World</title>
            </Head>
            <div>
                <Header />
                <h1>Home page</h1>
            </div>
        </section>
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