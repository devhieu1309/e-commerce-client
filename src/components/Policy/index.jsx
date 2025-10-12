function Policy(){
    return(
        <>
            <div className="container mx-auto px-32">
                <div className="mt-[220px] flex items-center justify-between bg-white p-3 rounded-md ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="flex items-center space-x-4 border border-[#6574e6] rounded-md py-3 px-7">
                        <img className="w-[50px] h-[50px] object-contain" src="/chinhsach_1.webp" alt="Giao hành nhanh" />
                        <p className="text-[16px] font-bold">Giao hàng nhanh</p>
                    </div>
                    <div className="flex items-center space-x-4 border border-[#6574e6] rounded-md py-3 px-7">
                        <img className="w-[50px] h-[50px] object-contain" src="/chinhsach_2.webp" alt="Tư vấn chuyên nghiệp" />
                        <p className="text-[16px] font-bold">Tư vấn chuyên nghiệp</p>
                    </div>
                    <div className="flex items-center space-x-4 border border-[#6574e6] rounded-md py-3 px-7">
                        <img className="w-[50px] h-[50px] object-contain" src="/chinhsach_3.png" alt="100% chính hãng" />
                        <p className="text-[16px] font-bold">100% chính hãng</p>
                    </div>
                    <div className="flex items-center space-x-4 border border-[#6574e6] rounded-md py-3 px-7">
                        <img className="w-[50px] h-[50px] object-contain" src="/chinhsach_4.webp" alt="Thanh toán linh hoạt" />
                        <p className="text-[16px] font-bold">Thanh toán linh hoạt</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Policy;