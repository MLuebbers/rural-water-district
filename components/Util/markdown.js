export default function Markdown({ children }) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: children }} />
        </>
    );
}