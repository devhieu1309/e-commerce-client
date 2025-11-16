import { useEffect, useState } from "react";
import { getVideoReview } from "../../services/videoreviewServices";

function ProductReview({ limit = 4, is_visible, showLoadMore }) {
    const [videoReviews, setVideoReviews] = useState([]);

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const API_DOMAIN = "http://localhost:8000"; 

    const loadVideos = async (newPage = 1) => {
        setLoading(true);

        const params =
            is_visible === undefined
                ? { limit, page: newPage }
                : { limit, page: newPage, is_visible };

        const result = await getVideoReview(params);

        // Nếu ít hơn limit => không còn dữ liệu
        if (result.length < limit) {
            setHasMore(false);
        }

        // Nếu là page 1 thì reset list
        if (newPage === 1) {
            setVideoReviews(result);
        } else {
            setVideoReviews((prev) => [...prev, ...result]);
        }

        setLoading(false);
    };

    useEffect(() => {
        setPage(1);
        setHasMore(true);
        loadVideos(1);
    }, [limit, is_visible]);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        loadVideos(nextPage);
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-6 md:pt-8 space-x-3">
                <div className="bg-white p-2 sm:p-3 rounded-md">
                    <h2 className="relative text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] sm:before:w-[5px] md:before:w-[6px] before:h-6 sm:before:h-7 md:before:h-8 before:bg-[#000F8F]">
                        Review sản phẩm
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
                        {videoReviews.map((item) => (
                            <div key={item.video_id} className="group/review cursor-pointer">
                                <div>
                                    <div className="relative">
                                        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                                            {item.source_type === "youtube" ? (
                                                <iframe
                                                    src={item.url.replace("watch?v=", "embed/")}
                                                    title={item.title}
                                                    className="absolute top-0 left-0 w-full h-full rounded-md"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <video
                                                    src={
                                                        item.url.startsWith("http")
                                                            ? item.url
                                                            : `${API_DOMAIN}${item.url}`
                                                    }
                                                    controls
                                                    className="absolute top-0 left-0 w-full h-full rounded-md"
                                                ></video>
                                            )}
                                        </div>

                                    </div>
                                    <div className="block content">
                                        <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium pt-2 sm:pt-3 group-hover/review:text-amber-400 line-clamp-2">{item.title}</h3>
                                    </div>

                                </div>
                            </div>
                        ))}

                        {showLoadMore && hasMore && !loading && (
                            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center mt-3">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-4 sm:px-6 py-2 bg-[#000F8F] text-white rounded-md hover:bg-amber-300 transition text-[13px] sm:text-[14px] md:text-[15px]"
                                >
                                    Xem thêm
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductReview;