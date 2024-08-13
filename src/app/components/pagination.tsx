import Link from 'next/link';

type Props = {
    numberPages: number;
};

export default function Pagination(props: Props) {
    return (
        <h2 className="paginationWrapper">
            {Array.from({ length: props.numberPages }, (_, i) => (
                <Link
                    key={i + 1}
                    href={i === 0 ? '/blog' : `/blog/page/${i + 1}`}>
                    {i + 1}
                </Link>
            ))}
        </h2>
    );
}
