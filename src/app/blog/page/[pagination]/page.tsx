import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogs, blogsPerPage } from '../../../utils/mdQueries';

export const metadata = {
    title: 'ブログ',
    description: 'これはブログページです。',
};

type Props = {
    params: {
        pagination: string;
    };
    searchParams: {};
};

export default async function Blog(props: Props) {
    const { blogs, numberPages } = await getAllBlogs();
    const currentPage = Number(props.params.pagination);
    const limitedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Blog</h1>
                    <p>エンジニアの日常生活をお届けします</p>
                    {limitedBlogs.map((blog, index) => (
                        <div
                            key={index}
                            className="blogCard">
                            <div className="cardContainer">
                                <h2>{blog.frontmatter.title}</h2>
                                <p>{blog.frontmatter.excerpt}</p>
                                <p>{blog.frontmatter.date}</p>
                                <Link href={`/blog/${blog.slug}`}>Read More</Link>
                            </div>
                            <div className="blogImg">
                                <Image
                                    src={blog.frontmatter.image}
                                    alt="card-image"
                                    height={300}
                                    width={1000}
                                    quality={90}
                                    priority={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const { numberPages } = await getAllBlogs();

    let paths: string[] = [];
    Array.from({ length: numberPages }).map((_, index) => paths.push(`/blog/page/%{index + 2}`));

    return paths;
}
