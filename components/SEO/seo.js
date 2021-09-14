import Head from 'next/head';

export default function SEO({ title, description, index, og }) {
    <Head>
        <title>{ title }</title>
        <meta viewport="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={ description } />
        <meta name="robots" content={ `${index ?? "index"}, follow` } />
        <meta charset="UTF-8" />

        <meta property="og:image" content={ og.image } />
        <meta property="og:type" content={ og.type } />
        <meta property="og:title" content={ og.title } />
        <meta property="og:description" content={ og.descriptioin } />
        <meta property="og:locale" content={ og.locale} />
    </Head>
}