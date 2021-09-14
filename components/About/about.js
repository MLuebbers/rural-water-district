import Markdown from "../Util/markdown";


export default function About({ text }) {
    return (
        <div>
            <Markdown>{ text }</Markdown>
        </div>
    );
}