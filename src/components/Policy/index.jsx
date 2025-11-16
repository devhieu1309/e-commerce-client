function Policy(){
    return(
        <>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
                <div className="mt-[50px] sm:mt-[100px] md:mt-[150px] lg:mt-[220px] flex flex-col sm:flex-row items-center justify-between bg-white p-3 sm:p-4 rounded-md ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] gap-3 sm:gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-4 border border-[#6574e6] rounded-md py-2 sm:py-3 px-4 sm:px-7 w-full sm:w-auto group hover:bg-[#6574e6] hover:border-[#000F8F] transition-all duration-300 ease-out cursor-pointer hover:scale-105">
                        <img className="w-[40px] sm:w-[45px] md:w-[50px] h-[40px] sm:h-[45px] md:h-[50px] object-contain transition-transform duration-300 group-hover:scale-110" src="/chinhsach_1.webp" alt="Giao hành nhanh" />
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold group-hover:text-white transition-colors duration-300">Giao hàng nhanh</p>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 border border-[#6574e6] rounded-md py-2 sm:py-3 px-4 sm:px-7 w-full sm:w-auto group hover:bg-[#6574e6] hover:border-[#000F8F] transition-all duration-300 ease-out cursor-pointer hover:scale-105">
                        <img className="w-[40px] sm:w-[45px] md:w-[50px] h-[40px] sm:h-[45px] md:h-[50px] object-contain transition-transform duration-300 group-hover:scale-110" src="/chinhsach_2.webp" alt="Tư vấn chuyên nghiệp" />
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold group-hover:text-white transition-colors duration-300">Tư vấn chuyên nghiệp</p>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 border border-[#6574e6] rounded-md py-2 sm:py-3 px-4 sm:px-7 w-full sm:w-auto group hover:bg-[#6574e6] hover:border-[#000F8F] transition-all duration-300 ease-out cursor-pointer hover:scale-105">
                        <img className="w-[40px] sm:w-[45px] md:w-[50px] h-[40px] sm:h-[45px] md:h-[50px] object-contain transition-transform duration-300 group-hover:scale-110" src="/chinhsach_3.png" alt="100% chính hãng" />
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold group-hover:text-white transition-colors duration-300">100% chính hãng</p>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 border border-[#6574e6] rounded-md py-2 sm:py-3 px-4 sm:px-7 w-full sm:w-auto group hover:bg-[#6574e6] hover:border-[#000F8F] transition-all duration-300 ease-out cursor-pointer hover:scale-105">
                        <img className="w-[40px] sm:w-[45px] md:w-[50px] h-[40px] sm:h-[45px] md:h-[50px] object-contain transition-transform duration-300 group-hover:scale-110" src="/chinhsach_4.webp" alt="Thanh toán linh hoạt" />
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold group-hover:text-white transition-colors duration-300">Thanh toán linh hoạt</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Policy;