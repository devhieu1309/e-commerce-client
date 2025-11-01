import {
  storeComment,
  getComments,
} from "../../../../services/commentsServices";
import { useState, useEffect } from "react";
import { notification } from "antd";
import { useParams } from "react-router-dom";

function Comment() {
  const [comments, setComment] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState(false);

  const rules = [
    {
      require: true,
      message: "Bắt buộc",
    },
  ];

  //hiển thị bình luận
  const fetchApi = async () => {
    try {
      const result = await getComments();
      setComment(result.message || []);
    } catch (error) {
      console.log("Loi: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  const handleChange = (e) => {
    const name = e.target.name; // cho biết name của các input
    const value = e.target.value; // dữ liệu nhập vào ô input

    setData({
      ...data, // giữ dữ liệu cũ
      [name]: value, // thay dữ liệu của các ô đang rõ
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSpinning(true);
      const formData = { ...data, news_id: id };
      const response = await storeComment(formData);
      setSpinning(false);

      if (response) {
        setTimeout(() => {
          setMessage({
            type: "success",
            text: "Bạn đã đăng bình luận thành công. Xin cảm ơn.",
          });
          setData({ fullname: "", email: "", content: "" });
        }, 1500);
        handleReload();

        setTimeout(() => setMessage(false), 5000);
      } else {
        setTimeout(() => {
          setMessage({
            type: "error",
            text: "Đăng bình luận không thành công vui lòng kiểm tra lại thông tin.",
          });
          setData({ fullname: "", email: "", content: "" });
        }, 1500);

        setTimeout(() => setMessage(false), 5000);

        setSpinning(false);
      }
    } catch (error) {
      setTimeout(() => {
        setMessage({
          type: "error",
          text: "Đăng bình luận không thành công vui lòng kiểm tra lại thông tin.",
        });
        setData({ fullname: "", email: "", content: "" });
      }, 1500);

      setTimeout(() => setMessage(false), 5000);
      console.log("Loi: ", error);
    }
  };
  return (
    <>
      {" "}
      <div className="p-2 mt-5 bg-white rounded-md">
        <h1 className="text-2xl font-bold ">Viết bình luận của bạn</h1>
        {message && (
          <p
            className={`p-4 mt-4 text-base rounded-md 
          ${
            message.type === "success"
              ? " bg-green-100 text-green-400 "
              : "bg-red-100 text-red-400"
          }`}
          >
            {message.text}
          </p>
        )}
        {contextHolder}

        <form action="" onSubmit={handleSubmit}>
          <div className="flex mt-4 mb-5 space-x-4">
            <input
              type="text"
              required={rules}
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="w-6/12 p-3 border border-b-4 border-gray-300 rounded-md border-b-blue-900"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required={rules}
              placeholder="Email"
              className="w-6/12 p-3 border border-b-4 border-gray-300 rounded-md border-b-blue-900"
            />
          </div>

          <div className="">
            <textarea
              name="content"
              value={data.content}
              onChange={handleChange}
              required={rules}
              className="w-full p-3 border border-b-4 border-gray-300 rounded-md border-b-blue-900"
              rows={4}
              placeholder="Nội dung"
            ></textarea>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={spinning}
              className=" p-3 w-[150px] rounded-md text-white bg-blue-900 hover:bg-white hover:border-yellow-500 hover:text-yellow-800 border "
            >
              Gửi thông tin
            </button>
          </div>
        </form>

        {/* hien thi binh luan */}
        <div className="w-full mt-8">
          <h5 className="text-xl font-bold ">Bình luận (3)</h5>

          {comments.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="flex w-full pb-8 mt-5 mb-10 space-x-5 border-b-2 border-gray-300"
            >
              <img
                src="https://www.gravatar.com/avatar/090f5df17abfac067a298db3eafc27a4?s=110&d=identicon"
                alt=""
                className="object-cover w-[80px] h-[80px]"
              />
              <div className="">
                <h3 className="font-bold">{item.fullname} </h3>
                <p className="text-gray-400">{item.created_at}</p>
                <p>
                  {item.content.length > 30
                    ? item.content.slice(0, 30)
                    : item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comment;
