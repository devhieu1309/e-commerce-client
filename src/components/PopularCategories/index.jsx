function PopularCategories(){
    return(
        <>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8">
                <div className="bg-white p-2 sm:p-3 rounded-md ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <h2 className="relative text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] sm:before:w-[5px] md:before:w-[6px] before:h-6 sm:before:h-7 md:before:h-8 before:bg-[#000F8F]">
                        Danh mục nổi bật
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
                         <div className="bg-white py-2 px-3 sm:px-5 w-full ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm group/card hover:ring-2 hover:ring-[#000F8F] hover:shadow-[0_0_24px_0_rgba(0,15,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer">
                            <div className="flex pb-5">
                                <div className="overflow-hidden">
                                    <img className="transform transition-transform duration-500 hover:scale-120" src="/230913060526-iphone-15-pro-max-n-1-59f45888-19c4-48c6-9803-1d3828deeba9-eab63bca-5bbf-4dc6-ac81-6b49a59aadf2.webp" alt="Iphone 15" />
                                </div>
                                <div className="relative inline-block group/scale">
                                    <div className="overflow-hidden">
                                        <img 
                                            src="/230913051319-iphone-15-plus-gree-3891c830-4f86-46bf-a147-d1e5d001f700-69fc9483-629c-4dd3-a9eb-7603c2a2a135.webp" 
                                            alt="Iphone 15" 
                                            className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover/scale:scale-120"
                                        />
                                    </div>
                                    <div className=" group-hover/scale:text-amber-300 absolute inset-0 bg-gray-500/30 flex items-center justify-center text-white font-bold text-2xl">
                                        +34
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-2 justify-between group/featured">
                                <div>
                                    <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold group-hover/featured:text-amber-400">Iphone</h3>
                                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000F8F] font-bold">Nhìu ưu đãi cho iphone 15</p>
                                </div>
                                <button
                                className="bg-[#F8F8F8] h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-full
                                            transition-transform duration-300 ease-out
                                            group-hover/featured:translate-x-1 flex-shrink-0"
                                >
                                    <img className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] object-contain" src="/icons8-next-50.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-white py-2 px-3 sm:px-5 w-full ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm group/card hover:ring-2 hover:ring-[#000F8F] hover:shadow-[0_0_24px_0_rgba(0,15,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer">
                            <div className="flex pb-5">
                                 <div className="overflow-hidden">
                                    <img className="transform transition-transform duration-500 hover:scale-120" src="/minhtuanmobile-ipad-pro-11-selec-78be9d03-2d95-4a49-968e-a5332eb20465-25342150-a1b4-4244-a941-9089187a0048-44aae303-9599-4883-87ec-8b4256b6f45a.webp" alt="Iphone 15" />
                                </div>
                                <div className="relative inline-block group/scale">
                                    <div className="overflow-hidden">
                                        <img 
                                        src="/220309063447-ipad-air-select-wif-498a2e36-4015-4cf2-bf71-2865cc4635c4-e583d274-1bd9-4ee7-b302-0e918b3278e2-434f1bcc-4dea-4c28-8698-e60ed84eaa8d.webp" 
                                        alt="Iphone 15" 
                                        className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover/scale:scale-120"
                                    />
                                    </div>
                                    <div className=" group-hover/scale:text-amber-300 absolute inset-0 bg-gray-500/30 flex items-center justify-center text-white font-bold text-2xl">
                                        +19
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-2 justify-between group/featured">
                                <div>
                                    <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold group-hover/featured:text-amber-400">Ipad</h3>
                                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000F8F] font-bold">Giảm giá cực sốc</p>
                                </div>
                                <button
                                className="bg-[#F8F8F8] h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-full
                                            transition-transform duration-300 ease-out
                                            group-hover/featured:translate-x-1 flex-shrink-0"
                                >
                                    <img className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] object-contain" src="/icons8-next-50.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-white py-2 px-3 sm:px-5 w-full ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm group/card hover:ring-2 hover:ring-[#000F8F] hover:shadow-[0_0_24px_0_rgba(0,15,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer">
                            <div className="flex pb-5">
                                <div className="overflow-hidden">
                                    <img className="transform transition-transform duration-500 hover:scale-120" src="/220608111844-thumb-macbook-pro-m-92a41cea-1766-4864-b183-14d77a6372e3-35b96841-a2ff-4f13-a7cd-916bc9912862.webp" alt="Iphone 15" />
                                </div>
                                <div className="relative inline-block group/scale">
                                    <div className="overflow-hidden">
                                        <img 
                                            src="/imac-231031035135.webp"  
                                            alt="Iphone 15" 
                                            className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover/scale:scale-120"
                                        />
                                    </div>
                                    <div className=" group-hover/scale:text-amber-300 absolute inset-0 bg-gray-500/30 flex items-center justify-center text-white font-bold text-2xl">
                                        +8
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-2 justify-between group/featured">
                                <div>
                                    <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold group-hover/featured:text-amber-400">Mac</h3>
                                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000F8F] font-bold">Giá tốt mỗi ngày</p>
                                </div>
                                <button
                                className="bg-[#F8F8F8] h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-full
                                            transition-transform duration-300 ease-out
                                            group-hover/featured:translate-x-1 flex-shrink-0"
                                >
                                    <img className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] object-contain" src="/icons8-next-50.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-white py-2 px-3 sm:px-5 w-full ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm group/card hover:ring-2 hover:ring-[#000F8F] hover:shadow-[0_0_24px_0_rgba(0,15,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer">
                            <div className="flex pb-5">
                                <div className="overflow-hidden">
                                    <img className="transform transition-transform duration-500 hover:scale-120" src="/220817045837-s7-lte-nhom-su-blue.webp" alt="Iphone 15" />
                                </div>
                                <div className="relative inline-block group/scale">
                                    <div className="overflow-hidden">
                                        <img 
                                            src="/230707101901-apple-watch-se-2022.webp" 
                                            alt="Iphone 15" 
                                            className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover/scale:scale-120"
                                        />
                                    </div>
                                    <div className=" group-hover/scale:text-amber-300 absolute inset-0 bg-gray-500/30 flex items-center justify-center text-white font-bold text-2xl">
                                        +5
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-2 justify-between group/featured">
                                <div>
                                    <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold group-hover/featured:text-amber-400">Watch</h3>
                                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000F8F] font-bold">Ưu đãi khủng</p>
                                </div>
                                <button
                                className="bg-[#F8F8F8] h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] flex items-center justify-center rounded-full
                                            transition-transform duration-300 ease-out
                                            group-hover/featured:translate-x-1 flex-shrink-0"
                                >
                                    <img className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] object-contain" src="/icons8-next-50.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCategories;