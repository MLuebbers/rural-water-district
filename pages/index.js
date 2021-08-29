
import Footer from '../components/Footer/footer';
import Gallery from '../components/Gallery/gallery';
import Header from '../components/Header/header';
import Layout from '../components/Layout/layout';
import Menu from '../components/Menu/menu';
import Player from '../components/Player/player';
import Portrait from '../components/Portrait/portrait';
import Schedule from '../components/Schedule/schedule';
import Socials from '../components/Socials/socials';

import getScheduleData from '../scripts/data/getScheduleData';
import getGalleryData from '../scripts/data/getGalleryData';
import getMetaData from '../scripts/data/getMetaData';

export default function Home({allScheduleData, allMetaData, allGalleryData}) {
  return (
    <Layout> 
      <Header></Header>
      <Menu data={ allMetaData.menu }/>
      <Schedule data={ allScheduleData }/>
      <Socials data={ allMetaData.socials }/>
      <Player data={ allMetaData.player}/>
      <Gallery images={ allGalleryData } />
      <Portrait path={ allMetaData.portrait } />
      <Footer/>
    </Layout>
  );
}

export async function getStaticProps() {
  const allScheduleData = getScheduleData();
  const allMetaData = getMetaData();
  const allGalleryData = getGalleryData();

  return {
    props: {
      allScheduleData,
      allMetaData,
      allGalleryData,
    }
  }
}
