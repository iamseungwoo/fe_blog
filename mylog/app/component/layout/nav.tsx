import navlinks from "@/app/data/navlinks"
import Link from "next/link"
import Logo from "./logo"


const Nav = () => {
    return (
        <div className={`ml-auto flex items-center gap-2 py-3`}>
            {navlinks.map((nav) => (
                <Link href={nav.link} key={nav.title} className={`px-3`}>
                    {nav.title}
                </Link>
            ))}
        </div>
    )
}

export default Nav;