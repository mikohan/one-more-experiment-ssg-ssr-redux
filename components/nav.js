import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/ssg">
        <a>SSG</a>
      </Link>
      <Link href="/ssr">
        <a>SSR</a>
      </Link>
      <Link href="/filters">
        <a>Filters</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
          ,
          nav {
            padding: 24px 0;
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;

