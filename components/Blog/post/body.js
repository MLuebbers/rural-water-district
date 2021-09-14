import Markdown from "../../Util/markdown";

export default function Body({ body, children }) {
    return (
        <>
            <Markdown>{ body }</Markdown>
        </>
    )
}