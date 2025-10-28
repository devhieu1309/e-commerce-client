import ProductReview from "../../../components/ProductReview";
function Review() {
    return (
        <>
            <div className="mb-10">
                <ProductReview limit={8} is_visible={undefined}  showLoadMore={true}/>
            </div>
        </>
    );
}
export default Review;