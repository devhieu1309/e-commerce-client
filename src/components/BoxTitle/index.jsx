function BoxTitle({ title, children }) {
    return (
        <div className="mb-[60px] mt-[20px]">
            <h2 className="font-bold text-[30px]" style={{ marginBottom: '40px' }}>
                {title}
                <div className="w-[100px] h-[4px] bg-[#000F8F] mt-1"></div>
            </h2>
            {children}
        </div>
    );
}
export default BoxTitle;