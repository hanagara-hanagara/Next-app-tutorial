import './styles/all.css';
import './styles/blog.css';
import './styles/common.css';
import './styles/contact.css';
import './styles/index.css';
import './styles/singleBlog.css';

import Header from './components/header';
import Footer from './components/footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
