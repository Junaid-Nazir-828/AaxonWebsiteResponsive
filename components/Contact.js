export default function Contact() {
    return (
        <section>
            <div className="bg-contactBg bg-no-repeat bg-cover shadow-[0px_8px_8px_0px_#00000017] border-[1.5px] text-center overflow-hidden">
                {/* Div for strips*/}
                {/* */}
                <div className="">
                    <div className="font-bold md:text-[46px] text-[28px] leading-[65px] tracking-[0.02em] mt-24 mx-4">
                        <p>
                            LET'S{" "}
                            <span className="text-[#F2B243]">CONNECT</span> WITH
                            US
                        </p>
                    </div>
                    <div className="">
                        <p className="font-medium md:text-[20px] text-[16px] leading-[19px] tracking-[0.02em] mt-10 mx-4">
                            Connect with us on email to explore the limitless
                            possibilities of technology<br></br> for your
                            business success. Let's start the conversation
                        </p>
                    </div>
                </div>

                <div className="my-20">
                    <form
                        action="https://getform.io/f/090ed0f2-c85c-4348-b8e6-80e90fe2c2eb"
                        method="POST">
                        <div className="flex justify-center">
                            <div className="flex justify-center md:w-[60%] w-[90%]  bg-white p-10 rounded-[20px] shadow-[8px_11px_13px_0px_#00000017]">
                                <div className="md:w-[90%]">
                                    <div className="flex flex-wrap gap-6">
                                        <input
                                            className="grow rounded-[8px] border-primary border-[1.5px] pl-8 py-4"
                                            placeholder="Name"
                                            name="Name"></input>
                                        <input
                                            className="grow rounded-[8px] border-primary border-[1.5px] pl-8 py-4"
                                            placeholder="Phone Number"
                                            name="Phone Number"></input>
                                    </div>
                                    <div className="flex mt-6">
                                        <input
                                            className="grow rounded-[8px] border-primary border-[1.5px] pl-8 py-4"
                                            placeholder="Email Address"
                                            name="Email Address"></input>
                                    </div>
                                    <div className="flex mt-6">
                                        <textarea
                                            className="grow h-[240px] rounded-[8px] border-primary border-[1.5px] p-8"
                                            placeholder="Your Message"
                                            name="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <button className="sm:py-[25px] py-[20px] sm:px-[130px] px-[100px] bg-[#F2B243] rounded-[8px] font-bold sm:text-[22px] leading-[26.63px] tracking-[0.02em]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
