import Link from 'next/link'

const Navlinks = (props: { className?: string | undefined; }) => {
    return (
        <div className={props.className}>
            <Link href="/rules" className="block text-white">Rules</Link>
            <Link href="/games" className="block text-white">Games</Link>
            <Link href="/about" className="block text-white">About</Link>
        </div>
    )
}
export default Navlinks;