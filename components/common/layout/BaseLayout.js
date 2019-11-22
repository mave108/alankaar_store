import React from 'react';
import Head from '../Head/Head';
import '../style/BaseStyle.scss';
import Header from '../../Header/Header';
import Nav from '../../Nav/Nav';
import Footer from '../Footer/Footer';



const BaseLayout = (props) => {
    const { className, title, cannonical, children, metas = [] } = props;
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`} />}
                {metas.map((attributes) => <meta {...attributes} />)}
                <link rel="icon" type="image/ico" href="/static/favicon.ico" />
            </Head>


            <main className={`${className}`}>
                <Header>
                    <Nav />
                </Header>
                <div className="wrapper">
                    {children}
                </div>
                <Footer />
            </main>

        </>
    );
}

export default BaseLayout;