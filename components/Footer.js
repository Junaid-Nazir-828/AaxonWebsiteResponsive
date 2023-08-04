export default function Footer() {
    return (
        <section className="overflow-hidden">
            <div className="relative h-[541px] bg-[#343434]">
                {/* div for strips */}
                <div className="absolute rotate-[35deg] -mt-[250px]">
                    <div className="flex">
                        <div className="bg-[#3F3F3F] w-40 h-[900px]"></div>
                        <div className="bg-[#3F3F3F] w-80 h-[1000px] ml-16"></div>
                    </div>
                </div>

                <div className="absolute flex inset-0 pt-10 justify-around">
                    <div>
                        <div className="pt-12">
                            <img src="AaxonLogoTransparent.png"></img>
                        </div>
                        <div className="font-medium text-[18px] leading-[21.78px] tracking-[0.02em] pt-4 text-[#91928E]">
                            <span>
                                Copyright © 2023 AAxon Solutions.<br></br>
                                All rights reserved.
                            </span>
                        </div>
                        <div className="mt-12 bg-[#91928E] h-[2px] w-full"></div>

                        <div className="flex gap-8 mt-6">
                            <div>
                                <img src="ion_mail-outline.png"></img>
                            </div>
                            <div className="pt-1 font-medium text-[18px] leading-[21.78px] tracking-[0.02em] text-[#91928E]">
                                <span>info@aaxonsolutions.com</span>
                            </div>
                        </div>

                        <div className="font-semibold mt-4 text-[26px] leading-[31.47px] tracking-[0.02em] text-[#F2B243]">
                            <span className="">LET'S GET IN TOUCH</span>
                        </div>

                        <div className="flex gap-8 mt-4">
                            <img src="facebook.png"></img>
                            <img src="linkedin.png"></img>
                            <img src="instagram.png"></img>
                            <img src="twitter.png"></img>
                        </div>
                    </div>

                    <div>
                        <div className="font-semibold pt-12 text-[26px] leading-[31.47px] tracking-[0.02em] text-[#F2B243]">
                            <p>OFFICES</p>
                        </div>
                        <div className="font-semibold text-[18px] leading-[21.78px] tracking-[0.02em] text-[#91928E]">
                            <div className="mt-8">
                                <p>Pakistan +92 51 8730099</p>
                            </div>
                            <div className="flex mt-2 gap-3">
                                <div>
                                    <img src="location.png"></img>
                                </div>
                                <div>
                                    5th floor, Daily Kashmir Linkbuilding,<br></br>
                                    Ghouri town Service road
                                </div>
                            </div>
                            <div className="bg-[#91928E] h-[2px] w-full mt-2"></div>

                            <div className="mt-8">
                                <p>Dubai +971 04 3984283</p>
                            </div>
                            <div className="flex mt-2 gap-3">
                                <div>
                                    <img src="location.png"></img>
                                </div>
                                <div>
                                    103, Al Makhawi Building, Oud Metha<br></br>POBox:
                                    80744
                                </div>
                            </div>
                            <div className=" bg-[#91928E] h-[2px] w-full mt-2"></div>

                            <div className="mt-8">
                                <p>Canada +1 (647) 677-0454</p>
                            </div>
                            <div className="flex mt-2 gap-3">
                                <div>
                                    <img src="location.png"></img>
                                </div>
                                <div>
                                    548-wasaga crescent, waterlooON<br></br>N2Y 2L8,
                                    Canada
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[545px] h-[471px] bg-gray-100"></div>
                </div>
            </div>
        </section>
    );
}
