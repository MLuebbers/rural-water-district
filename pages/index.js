
import Footer from '../components/Footer/footer';
import Gallery from '../components/Gallery/gallery';
import Header from '../components/Header/header';
import Layout from '../components/Layout/layout';
import Menu from '../components/Menu/menu';
import Player from '../components/Player/player';
import Portrait from '../components/Portrait/portrait';
import PreviewList from '../components/Blog/preview/list';
import Schedule from '../components/Schedule/schedule';
import Socials from '../components/Socials/socials';

import getScheduleData from '../scripts/data/getScheduleData';
import getGalleryData from '../scripts/data/getGalleryData';
import getMetaData from '../scripts/data/getMetaData';
import getPostListData from '../scripts/data/getPostListData';
import TagList from '../components/TagList/tagList';


import filterByTag from '../scripts/filters/filterByTag';

export default function Home({ allScheduleData, allMetaData, allGalleryData, allPostData }) {
  return (
    <Layout> 
      <Header></Header>
      <TagList tags={ allMetaData.tags } />
      <Menu data={ allMetaData.menu }/>
      <Schedule data={ allScheduleData }/>
      <Socials data={ allMetaData.socials }/>
      <Player data={ allMetaData.player}/>
      <Gallery images={ allGalleryData } />
      <Portrait path={ allMetaData.portrait } />
      <PreviewList data={ allPostData }/>
      <Footer/>
    </Layout>
  );
}

export async function getStaticProps() {
  const allScheduleData = getScheduleData();
  const allMetaData = getMetaData();
  const allGalleryData = getGalleryData();
  const allPostData = getPostListData(filterByTag("asd"));

  return {
    props: {
      allScheduleData,
      allMetaData,
      allGalleryData,
      allPostData,
    },
  }
}

