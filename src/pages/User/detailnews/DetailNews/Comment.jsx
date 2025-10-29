function Comment() {
  return (
    <>
      {" "}
      <div className="p-2 mt-5 bg-white rounded-md">
        <h1 className="text-2xl font-bold">Viết bình luận của bạn</h1>
        <div className="">
          <div className="flex mt-4 mb-5 space-x-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-6/12 p-3 border border-b-4 border-gray-300 rounded-md border-b-blue-900"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-6/12 p-3 border border-b-4 border-gray-300 rounded-md border-b-blue-900"
            />
          </div>

          <div className="">
            <textarea
              name=""
              className="w-full p-3 border border-b-4 border-gray-300 rounded-md border-b-blue-900"
              rows={4}
              placeholder="Nội dung"
              id=""
            ></textarea>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className=" p-3 w-[150px] rounded-md text-white bg-blue-900 hover:bg-white hover:border-yellow-500 hover:text-yellow-800 border "
            >
              Gửi thông tin
            </button>
          </div>
        </div>

        {/* hien thi binh luan */}
        <div className="w-full mt-8">
          <h5 className="text-xl font-bold ">Bình luận (3)</h5>

          <div className="flex w-full pb-8 mt-5 mb-10 space-x-5 border-b-2 border-gray-300">
            <img
              src="https://www.gravatar.com/avatar/090f5df17abfac067a298db3eafc27a4?s=110&d=identicon"
              alt=""
              className="object-cover"
            />
            <div className="">
              <h3 className="font-bold">Kiet</h3>
              <p className="text-gray-400">22/09/2025</p>
              <p>Noi dung binh luan</p>
            </div>
          </div>
          <div className="flex w-full pb-8 mt-5 mb-10 space-x-5 border-b-2 border-gray-300">
            <img
              src="https://www.gravatar.com/avatar/4fee8eb3c687558da9bc4437f223f430?s=110&d=identicon"
              alt=""
              className="object-cover"
            />
            <div className="">
              <h3 className="font-bold">Kiet</h3>
              <p className="text-gray-400">22/09/2025</p>
              <p>Noi dung binh luan</p>
            </div>
          </div>
          <div className="flex w-full pb-8 mt-5 mb-10 space-x-5 border-b-2 border-gray-300">
            <img
              src="https://www.gravatar.com/avatar/cfb39e48290ca4fab7730464dddab77d?s=110&d=identicon"
              alt=""
              className="object-cover"
            />
            <div className="">
              <h3 className="font-bold">Kiet</h3>
              <p className="text-gray-400">22/09/2025</p>
              <p>Noi dung binh luan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
