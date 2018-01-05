import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
  <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/design">
        <a style={linkStyle}>Design</a>
      </Link>
      <Link href="/code">
        <a style={linkStyle}>Code</a>
      </Link>
      <Link href="/photos">
        <a style={linkStyle}>Photos</a>
      </Link>
      <Link href="/recipes">
        <a style={linkStyle}>Recipes</a>
      </Link>
      <Link href="/store">
        <a style={linkStyle}>Store</a>
      </Link>
      <Link href="/work">
        <a style={linkStyle}>Work</a>
      </Link>
  </div>
)

export default Navbar