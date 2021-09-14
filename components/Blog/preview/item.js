import Box from '../../Util/box';
import Link from 'next/link';

export default function Item({ id, title, date, description, tags }) {
    return (
        <Link href={ `/posts/${ id }` }>
            <Box>
                <div>{ title }</div>
                <div>{ date }</div>
                <div>{ description }</div>
                <div>{ tags }</div>
            </Box>
        </Link>
    )
}