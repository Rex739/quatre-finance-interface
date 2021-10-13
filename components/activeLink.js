import { useRouter } from 'next/router'

const ActiveLink = ({ handleClick, children, href }) => {
    const router = useRouter()
    const listStyle = {
        marginRight: 5,
        background: router.asPath === href ? '#FFFFFF' : null,
        borderLeft: router.asPath === href ? ' 5px solid #F7931A' : null,
    }

    const linkStyle = {
        color: router.asPath === href ? '#266150' : null,
    }

    const handleActiveClick = (e) => {
        e.preventDefault()
        href === "#" ? alert("STILL IN DEVELOPMENT") : router.push(href)
    }

    return (
        <li onClick={handleClick} style={listStyle}>
            <a href={href} onClick={handleActiveClick} style={linkStyle}>
                {children}
            </a>
        </li>
       
    )
}

export default ActiveLink