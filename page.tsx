import Head from 'next/head';
import Header from '../app/Components/Header';
import Hero from '../app/Components/Hero';
import ComingSoon from '../app/Components/ComingSoon';
import Footer from './Components/Footer';
import Background from './Components/Background';
import ThankYou from './Components/thank-you';
export default function Home() {
  return (
    <>
      <Head>
        <title>Luxurious Fashion</title>
        <meta name="description" content="Discover a new era of luxurious fashion." />
        <Background/>     
      </Head>
      <Header />
      <Hero />
      <ComingSoon />
      
     <Footer/>
    
    </>
  );
}
