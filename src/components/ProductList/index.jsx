import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductList } from "../../services/productServices";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductList();
      const latest = response.data
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setProducts(latest);
      // setProducts(latest);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8">
        <div className="bg-white p-2 sm:p-3 rounded-md">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <div className="flex items-center space-x-2 bg-[#000F8F] rounded-sm p-2">
              <img
                className="h-[25px] w-[25px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] object-contain"
                src="/title_image_1_allpro1.webp"
                alt=""
              />
              <p className="text-white font-bold text-[14px] sm:text-[15px] md:text-[16px]">Sản phẩm mới</p>
            </div>
            {/* <div className="flex items-center space-x-2 border border-gray-500 rounded-sm p-2 hover:bg-[#000F8F] hover:text-white">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_2_allpro1.webp"
                alt=""
              />
              <p className="font-bold">Sản phẩm nổi bật</p>
            </div>
            <div className="flex items-center space-x-2 border border-gray-500 rounded-sm p-2 hover:bg-[#000F8F] hover:text-white">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_3_allpro1.png"
                alt=""
              />
              <p className="font-bold">Sản phẩm bán chạy</p>
            </div> */}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 py-6 sm:py-8 md:py-10 px-2">
            {products.map((product, index) => {
              const item = product.items[0];          
              return (
                <div
                  key={index}
                  className="p-2 sm:p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] group hover:ring-2 hover:ring-[#000F8F] hover:shadow-[0_0_24px_0_rgba(0,15,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative">
                    <div className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px] w-full overflow-hidden">
                      <img
                        className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                        // src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
                        src={item?.image ?? "/placeholder-image.png"}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-2">
                      <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                        Giảm 21%
                        <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                      </span>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2 py-[2px] bg-[#000F8F] w-[55px] sm:w-[60px] md:w-[70px] rounded-2xl absolute bottom-1">
                      <img
                        className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]"
                        src="/title_image_1_tag.webp"
                        alt=""
                      />
                      <span className="text-white text-[11px] sm:text-[12px] md:text-[13px]">Mới</span>
                    </div>
                  </div>
                  <div className="pt-3 sm:pt-4 md:pt-5">
                    <Link to={`/product/${product.product_id}`}>
                      <h3 className="text-[#231F20] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium hover:text-amber-400 line-clamp-2">
                        {product.product_name}
                      </h3>
                    </Link>
                    <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[13px] sm:text-[14px] md:text-[15px]">Liên hệ</p>
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                      Bảo hành chính hãng Apple 12 tháng
                    </p>
                    <div className="flex items-center justify-between py-1 sm:py-2">
                      <div className="flex items-center justify-center space-x-1">
                        <img
                          className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] md:h-[15px] md:w-[15px] object-contain"
                          src="/icons8-heart-50.png"
                          alt="Thích"
                        />
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                          Thích
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <img
                          className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] md:h-[15px] md:w-[15px] object-contain"
                          src="/icons8-circle-50.png"
                          alt="Thích"
                        />
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                          So Sánh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center pb-4 sm:pb-5">
            <button className="flex items-center justify-center border border-[#000F8F] px-3 py-1 sm:py-2 space-x-2 rounded-md text-[13px] sm:text-[14px] md:text-[15px]">
              <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
              <span className="text-[#000F8F] text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                {" "}
                &rarr;{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
