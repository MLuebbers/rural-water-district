import Image from 'next/image';

const portraitLoader = ({ src, width, quality }) => {
    return `/content/assets/${src}?w=${width}&q=${quality || 75}`;
};

export default function Portrait({ path, children }) {
    return (
        <>
            <Image 
                loader={ portraitLoader }
                src={ path } 
                width={ 200 }
                height={ 200 }
                alt="Portrait" 
            />
        </>
    );
}