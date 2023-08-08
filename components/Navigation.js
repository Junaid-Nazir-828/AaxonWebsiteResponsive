import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export const Navigation = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
            setShowDiv(window.innerWidth >= 1024);
        };

        handleResize(); // Initial check

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDiv = () => {
        setShowDiv((prevShowDiv) => !prevShowDiv);
    };

    // const scroll2El = elID => {
    //     window.scrollTo({
    //       top: document.getElementById(elID).offsetTop - 60,
    //       behavior: 'smooth',
    //     });
    //   };
    
    // const onBtnClick = (e) => {
    //     e.preventDefault();
    //     const goto = e.target.getAttribute('goto');
    //     setTimeout(() => {
    //       scroll2El(goto);
    //     }, 100);
    //   }

    return (
        <>
            <nav className="flex items-center flex-wrap p-3 ">
                <Link legacyBehavior href="/">
                    <a className="inline-flex items-center p-2 w-28 lg:ml-[90px] lg:w-[228px]">                        
                        <img src="/aaxonLogo.png"></img>
                    </a>
                </Link>
                <button
                    className={`inline-flex p-3 hover:bg-[#ccc] rounded ${
                        isLargeScreen ? "hidden" : ""
                    } ml-auto outline-none`}
                    onClick={toggleDiv}>
                    <img src="menu.svg"></img>
                </button>
                {showDiv || isLargeScreen >= 1024 ? (
                    <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
                        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:mr-[90px] w-full lg:items-center items-start flex flex-col lg:h-auto">
                            <Link legacyBehavior href="/">
                                <a className="text-primary lg:text-[24px] lg:inline-flex lg:w-auto lg:mr-3 w-full px-3 py-2 rounded font-medium items-center justify-center hover:text-[#666]">
                                    About
                                </a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a className="text-primary lg:text-[24px] lg:inline-flex lg:w-auto lg:mr-3 w-full px-3 py-2 rounded font-medium items-center justify-center hover:text-[#666]">
                                    Services
                                </a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a className="text-primary lg:text-[24px] lg:inline-flex lg:w-auto lg:mr-3 w-full px-3 py-2 rounded font-medium items-center justify-center hover:text-[#666]">
                                    Clients
                                </a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a className="text-primary lg:text-[24px] lg:inline-flex lg:w-auto lg:mr-3 w-full px-3 py-2 rounded font-medium items-center justify-center hover:text-[#666]">
                                    Reviews
                                </a>
                            </Link>
                            <button
                                className="font-medium bg-[#F2B243] lg:text-[24px] lg:w-28 lg:h-9 rounded px-2 py-1 mx-[6px] my-1 lg:py-0 lg:px-4 shadow-[4px_4px_6px_0px_#00000017]"
                                href="/">
                                Contact
                            </button>
                        </div>
                    </div>
                ) : null}
            </nav>
        </>
    );
};
