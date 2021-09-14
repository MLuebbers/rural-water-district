import Body from './body.js';
import Date from './date.js';
import Navigation from './navigation.js';
import Title from './title.js';

export default function Post() {
    return (
        <>
            <Navigation />
            <Title ></Title>
            <Date></Date>
            <Body></Body>
        </>
    )
}