function LookupGuarantee() {


    return (

        <>

            <div className="container mt-5 mb-5 ">
                <div className="space-x-1 center pt-[30px] pb-[30px] bg-white w-10/12 ml-[120px] mr-[120px] rounded-md shadow-lg">
                    <div className="text-lg font-medium  ml-[30px] mr-[30px] text-center ">
                        <h2 className="mt-1">Kiểm tra thông tin bảo hành</h2>
                        <h2 className="mt-1">Tra cứu thông tin và thời hạn bảo hành sản phẩm của bạn</h2>
                    </div>

                 
                    <div className="flex mt-3 space-x-3 s ml-[150px] mr-[150px] justify-center ">
                     
                            <input className="w-5/12 p-2 font-light border border-gray-300 rounded-md" type="text" placeholder="Nhập số serial sản phẩm của bạn. VD: demo123" />
                            <div className="p-4 text-white bg-blue-800 rounded-md hover:bg-yellow-500">

                                <button type="submit" name="" id="" className="">
                                    Kiểm tra
                                </button>
                            </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default LookupGuarantee