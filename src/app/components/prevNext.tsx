import Link from 'next/link';

type PrevNext = [
    {
        frontmatter: { title: string };
        slug: string;
    },
];

type Props = {
    prev: PrevNext;
    next: PrevNext;
};

export default function prevNext(props: Props) {
    console.log(props);
    return (
        <div className="pnWrapper">
            {0 < props.prev.length && (
                <Link href={`/blog/${props.prev[0].slug}`}>
                    <h3>{props.prev[0].frontmatter.title}</h3>
                    <img
                        src="/images/arrow-left.svg"
                        alt="allow-left"
                    />
                </Link>
            )}
            {0 < props.next.length && (
                <Link href={`/blog/${props.next[0].slug}`}>
                    <h3>{props.next[0].frontmatter.title}</h3>
                    <img
                        src="/images/arrow-right.svg"
                        alt="arrow-right"
                    />
                </Link>
            )}
        </div>
    );
}
