import Link from "next/link";
// import NavLogo from '../public/assets/AAxon Logo.png'

export default function Nav() {
    return (
        <>
            <header className="border-b bg-white border-gray-300">
                <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
                    <Link href="/">
                        <img
                            src="AAxon Logo.png"
                            alt="logo"
                            className="cursor-pointer w-40"
                        />
                    </Link>
                    <nav
                        className={`lg:flex lg:items-center lg:w-auto w-full`}>
                        <ul className="text-base text-[18px] lg:flex lg:justify-between">
                            <li className="lg:px-5 py-2 font-medium">
                                <Link href="/">About</Link>
                            </li>
                            <li className="lg:px-5 py-2 font-medium">
                                <Link href="/about">Services</Link>
                            </li>
                            <li className="lg:px-5 py-2 font-medium">
                                <Link href="/services">Clients</Link>
                            </li>

                            <li className="lg:px-5 py-2 font-medium">
                                <Link href="/technologies">Reviews</Link>
                            </li>

                        </ul>
                            <div className="lg:px-5 py-2 font-medium text-[18px]">
                                <button className="bg-[#F2B243] w-28 h-9 rounded" href="/contact">Contact</button>
                            </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

