export default function Footer() {
    return (
        <section className="">
            <div className="bg-[#343434] bg-footerBg bg-no-repeat">                
                <div className="flex flex-wrap pt-10 justify-center gap-x-16">
                    <div className="mx-2 mb-12">                                                
                        <div className="pt-12 md:w-[325px] w-40">
                            <img src="AaxonLogoTransparent.png"></img>
                        </div>
                        <div className="font-medium md:text-[18px] text-[14px] leading-[21.78px] tracking-[0.02em] pt-4 text-[#91928E]">
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
                            <div className="pt-1 font-medium md:text-[18px] text-[14px] leading-[21.78px] tracking-[0.02em] text-[#91928E]">
                                <span>info@aaxonsolutions.com</span>
                            </div>
                        </div>

                        <div className="font-semibold mt-4 md:text-[26px] text-[20px] leading-[31.47px] tracking-[0.02em] text-[#F2B243]">
                            <span className="">LET'S GET IN TOUCH</span>
                        </div>

                        <div className="flex gap-8 mt-4">
                            <img src="facebook.png"></img>
                            <img src="linkedin.png"></img>
                            <img src="instagram.png"></img>
                            <img src="twitter.png"></img>
                        </div>
                    </div>

                    <div className="mx-2 mb-12">
                        <div className="font-semibold pt-12 md:text-[26px] text-[20px] leading-[31.47px] tracking-[0.02em] text-[#F2B243]">
                            <p>OFFICE</p>
                        </div>
                        <div className="font-semibold md:text-[18px] text-[14px] leading-[21.78px] tracking-[0.02em] text-[#91928E]">                            
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
                            <div className="bg-[#91928E] h-[2px] w-full mt-2"></div>                            
                        </div>
                    </div>
                    <div className="md:w-[445px] md:h-[431px] w-[300px] h-[300px] bg-gray-100 mb-8 mx-2"></div>
                </div>
            </div>
        </section>
    );
}
