function FromPreOrderPage() {
  return (
    <>
      <div className="container justify-center">
        <div className="flex mt-10  pl-[100px] pr-[100px] w-full  mb-10">
          <div className="w-6/12 p-4 pr-2 overflow-hidden bg-white rounded-tl-2xl rounded-bl-2xl">
            <img
              src="public/dattruoc.webp"
              className="object-cover w-full h-[310px] rounded-md  transition-transform duration-600 hover:scale-103"
              alt=""
            />
          </div>

          <div className="w-6/12 p-2 pr-5 bg-white rounded-tr-2xl rounded-br-2xl">
            <h1
              className="relative pl-3 mt-3 mb-2 text-2xl text-[#000F8F] font-bold 
               before:content-[''] before:absolute before:left-0 
               before:top-1/2 before:-translate-y-1/2 
               before:w-[6px] before:h-full before:bg-[#000F8F]"
            >
              Đặt trước sản phẩm
            </h1>
            <span className="font-semibold text-20px">
              Đặt trước iPhone 15 Series để nhận được nhiều ưu đãi từ cửa hàng
              chúng tôi. <br />
              Để lại thông tin ngay bạn nhé!
            </span>

            <form action="" className="mt-2 space-y-3">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full p-1 px-2 border border-gray-400 rounded-md shadow-md"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full p-1 px-2 border border-gray-400 rounded-md shadow-md"
              />
              <input
                type="text"
                placeholder="Điện thoại"
                className="w-full p-1 px-2 border border-gray-400 rounded-md shadow-md"
              />
              <textarea
                name=""
                rows="3"
                placeholder="Nội dung"
                className="w-full p-1 px-2 border border-gray-400 rounded-md shadow-md"
                id=""
              ></textarea>

              <button
                type="submit"
                className="w-full p-2 text-white bg-[#000F8F] hover:bg-yellow-400 rounded-md shadow-md"
              >
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FromPreOrderPage;
