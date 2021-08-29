export default function Player({ data, children}) {
    const { embed, caption } = data;

    return (
        <div className="player">
            <div className="player-embed" dangerouslySetInnerHTML={{ __html: embed }}></div>
            <div>
                { caption }
            </div>
        </div>
    );
}