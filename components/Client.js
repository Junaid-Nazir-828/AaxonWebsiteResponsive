export default function Client(){
    return(
        <section>
            <div className="h-[480px] bg-[#F6F6F6] shadow-[0px_-8px_8px_0px_#00000017]">
                <div className="text-center  font-bold text-[46px] leading-[65px] tracking-[0.02em] text-primary pt-12">
                    <p>OUR <span className="text-[#F2B243]">CLIENTS</span> THAT TRUST US</p>
                </div>
                <div className="flex justify-center h-[182px] bg-white mt-28">
                    <div>
                        <div className="flex mt-16 gap-16">
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