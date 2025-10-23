import { useEffect, useState } from "react";
import { getVideoReview } from "../../services/videoreviewServices";

function ProductReview({ limit = 4, is_visible }) {
    const [videoReviews, setVideoReviews] = useState([]);
    //phan them vao
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    //   end phan them vao

    // useEffect(() => {
    //     const load = async () => {
    //         // Nếu is_visible là undefined, không truyền vào query
    //         const params = is_visible === undefined ? { limit } : { limit, is_visible };
    //         const result = await getVideoReview(params);
    //         setVideoReviews(result);
    //     };
    //     load();
    // }, [limit, is_visible]);

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
                        {/* <div className="group/review cursor-pointer">
                            <div>
                                <div className="relative">
                                    <img className="rounded-md" src="/maxresdefault-10.webp" alt="" />
                                    <div className="icon absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-circle text-white group-hover/review:text-amber-400" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-[20px] font-medium pt-2 group-hover/review:text-amber-400">Review iPhone 15 Pro Max: thay đổi nhỏ (hay lớn)?</h3>
                            </div>
                        </div> */}
                        {videoReviews.map((item) => (
                            <div key={item.video_id} className="group/review cursor-pointer">
                                <div>
                                    <div className="relative">
                                        {/* <img className="rounded-md" src={item.thumbnail || "/default-thumbnail.jpg"} alt={item.title} /> */}
                                        <img className="rounded-md" src="../../../public/maxresdefault-8.webp" alt={item.title} />
                                        <div className="icon absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-circle text-white group-hover/review:text-amber-400" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="block content">
                                        <h3 className="text-[20px] font-medium pt-2 group-hover/review:text-amber-400">{item.title}</h3>
                                    </div>

                                </div>
                            </div>
                        ))}
                        {hasMore && !loading && (
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