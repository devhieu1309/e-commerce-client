function LatestNews(){
    return(
        <>
            <div className="container mx-auto px-32 pt-8 space-x-3">
                <div className="bg-white p-2 rounded-md">
                    <h2 className="relative text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
                        Tin tức mới nhất
                    </h2>
                    <div className="flex space-x-8 pt-8">
                        <div className="w-1/2">
                            <div>
                                <img className="rounded-md cursor-pointer" src="/tt10.webp" alt="" />
                            </div>
                            <div>
                                <h3 className="text-black font-bold text-[21px] pt-3 cursor-pointer hover:text-amber-400">iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiề...</h3>
                                <p className="text-amber-500">Ngày đăng: 17/11/2023</p>
                                <p className="pt-3 text-[14px]">1. iPhone 15 màu hồng có mấy phiên bản? Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series gồm dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam màu nhẹ nhàng, không quá nổi bật nhưng tạo nên cá tính riêng cho các phái nữ khi...</p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col space-y-4">
                            <div className="flex">
                                <div className="w-1/3">
                                    <img className="h-[100%] w-[95%] object-cover rounded-md cursor-pointer" src="/tt9.webp" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-[16px] hover:text-amber-400 cursor-pointer">iPhone 15 có mấy màu? Màu nào đẹp nhất</h4>
                                    <p className="text-[14px]">1. Tổng quan về iPhone 15  Ngày 13/09, Apple đã trình làng 4 phiên bản iPhone 15 Series. Mỗi phiên bản đều có những nâng...</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/3">
                                    <img className="h-[100%] w-[95%] object-cover rounded-md cursor-pointer" src="/tt8.webp" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-[16px] hover:text-amber-400 cursor-pointer">iPhone 15 có mấy màu? Màu nào đẹp nhất</h4>
                                    <p className="text-[14px]">1. Tổng quan về iPhone 15  Ngày 13/09, Apple đã trình làng 4 phiên bản iPhone 15 Series. Mỗi phiên bản đều có những nâng...</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/3">
                                    <img className="h-[100%] w-[95%] object-cover rounded-md cursor-pointer" src="/tt7.webp" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-[16px] hover:text-amber-400 cursor-pointer">iPhone 15 có mấy màu? Màu nào đẹp nhất</h4>
                                    <p className="text-[14px]">1. Tổng quan về iPhone 15  Ngày 13/09, Apple đã trình làng 4 phiên bản iPhone 15 Series. Mỗi phiên bản đều có những nâng...</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/3">
                                    <img className="h-[100%] w-[95%] object-cover rounded-md cursor-pointer" src="/tt6.webp" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-[16px] hover:text-amber-400 cursor-pointer">iPhone 15 có mấy màu? Màu nào đẹp nhất</h4>
                                    <p className="text-[14px]">1. Tổng quan về iPhone 15  Ngày 13/09, Apple đã trình làng 4 phiên bản iPhone 15 Series. Mỗi phiên bản đều có những nâng...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-8">
                        <button className="flex items-center justify-center bg-white px-3 py-1 space-x-2 rounded-md border border-[#000F8F]">
                            <span className="text-[#000F8F]">Xem toàn bộ tin tức</span>
                            <span className="text-[#000F8F] text-[20px] font-bold"> &rarr; </span> 
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews;