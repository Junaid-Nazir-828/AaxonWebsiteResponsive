export default function Hero() {
    return (
        <section className="overflow-hidden">
            <div className="relative">
                <div className="absolute bottom-0 inset-x-0 xl:h-full xl:w-[1279px]">
                    <div className="xl:absolute xl:bg-[#F2B243E5] xl:-ml-[450px] xl:rotate-[55deg] xl:h-[1200px] xl:w-[1679px] xl:opacity-90"></div>
                    <div className="xl:relative flex flex-col">                        
                        <div className="bg-[#F2B243E5] order-last text-[20px] font-semibold xl:bg-inherit xl:absolute xl:h-[297px] xl:w-[776px] xl:top-[226px] xl:left-[155px] xl:font-bold xl:text-[57px] xl:leading-[65px] xl:tracking-[0.02em] text-center xl:text-left xl:text-[#0C0B08]">                            
                            <p className="">
                                EMPOWERING<br></br>
                                <span className="xl:text-white"> BUSINESSES</span>{" "}
                                WITH INNOVATIVE<br></br> TECHNOLOGY SOLUTIONS
                            </p>
                        </div>
                        <div className="invisible xl:visible xl:absolute xl:w-[749px] xl:h-[128px] xl:top-[545px] xl:left-[155px] xl:text-[24px] xl:text-[#0C0B08]">
                            <span className="">
                                With expertise and dedication, we streamline
                                operations, boost productivity, and drive
                                growth. Our commitment to exceptional support
                                ensures our clients' success in a dynamic
                                digital world.
                            </span>
                        </div>
                    </div>
                </div>
                <img src="hero img.png" className="xl:w-full"></img>
            </div>
        </section>
    );
}