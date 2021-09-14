
import Layout from '../../components/Layout/layout';
import PreviewList from '../../components/Blog/preview/list';

import getMetaData from '../../scripts/data/getMetaData';
import getPostListData from '../../scripts/data/getPostListData';

import filterByTag from '../../scripts/filters/filterByTag';

export default function Post({ id, listData }) {

    return (
        <Layout>
            this is a list for #{ id }
            <PreviewList data={ listData }/>
        </Layout>
    );
}

export async function getStaticPaths() {
    const tags = Object.keys(getMetaData().tags).filter(n => n);
    const paths = tags.map((tag) => {
        return {
            params: {
                id: tag,
            }
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;

    const listData = getPostListData(filterByTag(id));
    return {
        props: {
            id,
            listData,
        }
    }
}