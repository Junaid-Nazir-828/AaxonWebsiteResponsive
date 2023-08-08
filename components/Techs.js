// bg-[#F6F6F6]
export default function Techs() {
    return (
        <section className="overflow-hidden">
            {/* div for strips */}
            <div className="absolute">
                <div>
                    <img src="Group 25.svg"></img>
                </div>
            </div>
            <div className="lg:h-[97vh] sm:h-[160vh] h-[145vh] border-2">
                <div className="absolute">
                    <div className="flex justify-center pt-28 font-bold sm:text-[46px] text-[30px] color-primary">
                        <div>
                            OUR <span className="text-[#F2B243]">SERVICES</span>
                        </div>
                    </div>

                    {/* Div for services boxes */}
                    <div className="flex lg:flex-row flex-col lg:gap-x-8 gap-y-8 mt-16 mx-20">
                        <div className="border-2 text-center shadow-[5px_5px_16px_0px_#0000001A] rounded-[20px] bg-white">
                            <div className="flex justify-center mt-8">
                                <img src="data analytics.png" className="sm:w-[105px] w-[80px]"></img>
                            </div>
                            <div className="font-semibold sm:text-2xl text-[18px] leading-[28px] tracking-[0.02em] mt-4">
                                Data <br></br>Analytics
                            </div>
                            <div className="font-normal sm:text-[16px] text-[14px] leading-[19px] tracking-[0.02em] mt-4 px-4 pb-10">
                                Our data analytics solutions unlock valuable
                                insights to drive informed decision-making to
                                help businesses gain a competitive edge.
                            </div>
                        </div>
                        <div className="border-2 text-center shadow-[5px_5px_16px_0px_#0000001A] rounded-[20px] bg-white">
                            <div className="flex justify-center mt-8">
                                <img src="web.png" className="sm:w-[105px] w-[80px]"></img>
                            </div>
                            <div className="font-semibold sm:text-2xl text-[18px] leading-[28px] tracking-[0.02em] mt-4">
                                Web<br></br>Development
                            </div>
                            <div className="font-normal sm:text-[16px] text-[14px] leading-[19px] tracking-[0.02em] mt-4 px-4 pb-10">
                                Leveraging the latest technologies and industry
                                best practices to design and develop responsive,
                                scalable, and user-friendly websites that drive
                                results.
                            </div>
                        </div>
                        <div className="border-2 text-center shadow-[5px_5px_16px_0px_#0000001A] rounded-[20px] bg-white">
                            <div className="flex justify-center mt-8">
                                <img src="sap.png" className="sm:w-[105px] w-[80px]"></img>
                            </div>
                            <div className="font-semibold sm:text-2xl text-[18px] leading-[28px] tracking-[0.02em] mt-4">
                                System Apps<br></br>& Products
                            </div>
                            <div className="font-normal sm:text-[16px] text-[14px] leading-[19px] tracking-[0.02em] mt-4 px-4 pb-10">
                                Using SAP's robust suite of enterprise software
                                to integrate core business functions and enable
                                seamless collaboration across departments.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
