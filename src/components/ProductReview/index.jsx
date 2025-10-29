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
            <div className="container mx-auto px-32 pt-8 space-x-3">
                <div className="bg-white p-2 rounded-md">
                    <h2 className="relative text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
                        Review sản phẩm
                    </h2>
                    <div className="grid grid-cols-4 gap-4 pt-8">
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
                                        <h3 className="text-[20px] font-medium pt-2 group-hover/review:text-amber-400">{item.title}</h3>
                                    </div>

                                </div>
                            </div>
                        ))}

                        {showLoadMore && hasMore && !loading && (
                            <div className="col-span-4 flex justify-center mt-3">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-6 py-2 bg-[#000F8F] text-white rounded-md hover:bg-amber-300 transition"
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