export default function Contact() {
    return (
        <section>
            <div className="h-[927px] shadow-[0px_8px_8px_0px_#00000017] border-[1.5px] text-center relative overflow-hidden">
                {/* Div for strips*/}
                {/* */}
                <div className="absolute left-[1250px] -rotate-[26deg] -mt-[134px]">
                    <div className="flex">
                        <div className="bg-[#F2B243] w-40 h-[1250px]"></div>
                        <div className="bg-[#F2B243] w-16 h-[1000x] ml-16"></div>
                    </div>
                </div>
                <div className="absolute inset-0">
                    <div className="font-bold text-[46px] leading-[65px] tracking-[0.02em] mt-24">
                        <p>
                            LET'S{" "}
                            <span className="text-[#F2B243]">CONNECT</span> WITH
                            US
                        </p>
                    </div>
                    <div className="">
                        <p className="font-medium text-[20px] leading-[19px] tracking-[0.02em] mt-10">
                            Connect with us on email to explore the limitless
                            possibilities of technology<br></br> for your
                            business success. Let's start the conversation
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 pt-80">
                    <div className="flex justify-center">
                        <div className="flex justify-center bg-white p-10 rounded-[20px] shadow-[8px_11px_13px_0px_#00000017]">
                            <div>
                                <div className="flex gap-6">
                                    <input
                                        className="w-[365.84px] h-[56.13px] rounded-[8px] border-primary border-[1.5px] pl-8"
                                        placeholder="Name"></input>
                                    <input
                                        className="w-[437.57px] h-[56.13px] rounded-[8px] border-primary border-[1.5px] pl-8"
                                        placeholder="Phone Number"></input>
                                </div>
                                <div className="flex mt-6">
                                    <input
                                        className="w-[830.31px] h-[56.13px] rounded-[8px] border-primary border-[1.5px] pl-8"
                                        placeholder="Email Address"></input>
                                </div>
                                <div className="flex mt-6">
                                    <textarea
                                        className="w-[830.31px] h-[246.58px] rounded-[8px] border-primary border-[1.5px] pl-8 pt-8"
                                        placeholder="Your Message"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="w-[311px] h-[70px] bg-[#F2B243] rounded-[8px] font-bold text-[22px] leading-[26.63px] tracking-[0.02em]">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
