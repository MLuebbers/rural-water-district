import getPostIds from '../../scripts/data/getPostIds';
import getPostData from '../../scripts/data/getPostData';
import Layout from '../../components/Layout/layout';
import Tags from '../../components/Blog/post/tags';
import Body from '../../components/Blog/post/body';

export default function Post({ postData }) {

    return (
        <Layout>
            { postData.title }
            <br />
            { postData.id }
            <br />
            { postData.date }
            <br />
            <Tags tags={ postData.tags } specialItems="test special, items" />
            <Body body={ postData.body } />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;

    const postData = await getPostData(id);
    return {
        props: {
            postData
        }
    }
}