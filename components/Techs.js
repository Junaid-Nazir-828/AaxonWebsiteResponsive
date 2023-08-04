export default function Techs() {
    return (
        <section className="overflow-hidden">
            <div className="relative h-[729px] border-2">
                {/* div for strips */}
                <div className="absolute rotate-[45deg] -mt-[450px]">
                    <div className="flex">
                        <div className="bg-[#F6F6F6] w-40 h-[1000px]"></div>
                        <div className="bg-[#F6F6F6] w-80 h-[1400px] ml-16"></div>
                    </div>
                </div>
                <div className="absolute left-[10%] w-[1200px]">
                    <div>
                        <div className="flex justify-center pt-28 font-bold text-[46px] color-primary">
                            <div>
                                OUR{" "}
                                <span className="text-[#F2B243]">SERVICES</span>
                            </div>
                        </div>

                        {/* Div for services boxes */}
                        <div className="flex justify-between mt-16">
                            <div className="border-2 h-[388px] w-[331px] text-center shadow-[5px_5px_16px_0px_#0000001A] rounded-[20px] bg-white">
                                <div className="flex justify-center mt-8">
                                    <img src="data analytics.png"></img>
                                </div>
                                <div className="font-semibold text-[24px] leading-[28px] tracking-[0.02em] mt-4">
                                    Data <br></br>Analytics
                                </div>
                                <div className="font-normal text-[16px] leading-[19px] tracking-[0.02em] mt-4 px-4">
                                    Our data analytics solutions unlock valuable
                                    insights to drive informed decision-making
                                    to help businesses gain a competitive edge.
                                </div>
                            </div>
                            <div className="border-2 h-[388px] w-[331px] text-center shadow-[5px_5px_16px_0px_#0000001A] rounded-[20px] bg-white">
                                <div className="flex justify-center mt-8">
                                    <img src="web.png"></img>
                                </div>
                                <div className="font-semibold text-[24px] leading-[28px] tracking-[0.02em] mt-4">
                                    Web<br></br>Development
                                </div>
                                <div className="font-normal text-[16px] leading-[19px] tracking-[0.02em] mt-4 px-4">
                                    Leveraging the latest technologies and
                                    industry best practices to design and
                                    develop responsive, scalable, and
                                    user-friendly websites that drive results.
                                </div>
                            </div>
                            <div className="border-2 h-[388px] w-[331px] text-center shadow-[5px_5px_16px_0px_#0000001A] rounded-[20px]">
                                <div className="flex justify-center mt-8">
                                    <img src="sap.png"></img>
                                </div>
                                <div className="font-semibold text-[24px] leading-[28px] tracking-[0.02em] mt-4">
                                    System Apps<br></br>& Products
                                </div>
                                <div className="font-normal text-[16px] leading-[19px] tracking-[0.02em] mt-4 px-4">
                                    Using SAP's robust suite of enterprise
                                    software to integrate core business
                                    functions and enable seamless collaboration
                                    across departments.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
