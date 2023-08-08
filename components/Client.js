export default function Client(){
    return(
        <section>
            <div className="bg-[#F6F6F6] lg:bg-clientBg lg:bg-no-repeat lg:bg-cover shadow-[0px_-8px_8px_0px_#00000017] lg:pb-28">
                <div className="text-center font-bold md:text-[46px] text-[28px] leading-[65px] tracking-[0.02em] text-primary pt-12 mx-8">
                    <p>OUR <span className="text-[#F2B243]">CLIENTS</span> THAT TRUST US</p>
                </div>
                <div className="flex justify-center bg-white mt-28">
                    <div>
                        <div className="flex justify-center flex-wrap gap-16 py-16 mx-8">
                            <div>
                                <img src="client1.png"></img>
                            </div>
                            <div>
                                <img src="client2.png"></img>
                            </div>
                            <div>
                                <img src="client3.png"></img>
                            </div>
                            <div>
                                <img src="client2.png"></img>
                            </div>
                            <div>
                                <img src="client1.png"></img>
                            </div> 
                        </div>          
                        
                    </div>
                </div>
            </div>       
        </section>
    )
}