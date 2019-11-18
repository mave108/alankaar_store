import Head from 'next/head'
import '../style/BaseStyle.scss';
import Header from '../../Header/Header';
import Nav from '../../Nav/Nav';
import Footer from '../Footer/Footer';


const BaseLayout = (props) => {
    const { className, title, cannonical, children, metas = [] } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way." />
                <meta name="keywords" content="jerga portfolio, jerga developer, jerga freelancig, jerga programming" />
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