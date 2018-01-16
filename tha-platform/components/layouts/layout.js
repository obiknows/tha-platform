import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
    {/* This is the Site Head -- hidden in the HTMLz */}
    <title>obiknows</title>
    <meta charSet='utf-8' />
    <meta name="description" content="the obi knows website and sacred knowledge base" />
    <meta name="author" content="Obi Who Knows" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
  </Head>

  <header>
    <nav>
      <Link href='/'><a>Home</a></Link> |
      <Link href='/art'><a>Art</a></Link> |
      <Link href='/code'><a>Code</a></Link> |
      <Link href='/food'><a>Food</a></Link> |
      <Link href='/research'><a>Research</a></Link> |
      <Link href='/design'><a>Design</a></Link> |
    </nav>
  </header>

  { children }

  <footer>
    {'I`m here to stay cuz, ima footer'}
  </footer>
  </div>
)
