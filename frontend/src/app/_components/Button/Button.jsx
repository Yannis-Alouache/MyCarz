import Link from 'next/link'

const Button = (props) => {
  let { href, children, className, style } = props

  if (href) {
    return (
        <Link href={ href } style={ style }className={ "rounded-full border-solid border-4 px-5 py-2 bg-white " + className }>
            { children }
        </Link>
    )
  }
  else {
    return (
        <button style={ style } className={ "rounded-full border-solid border-4 px-5 py-2 bg-white " + className }>
            { children }
        </button>
    )
  }
}

export default Button