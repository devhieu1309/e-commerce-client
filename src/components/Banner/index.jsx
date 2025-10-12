function Banner(){
    return(
        <>
            <div className="relative">
                <img className="w-[1920px] object-contain" src="/slider_1.webp" alt="Banner-1" />
                <div className="container mx-auto flex items-center justify-between px-32 absolute top-[420px]">
                    <div className="h-[272px] w-[625px] overflow-hidden rounded-xl">
                        <img className="w-[625px] rounded-xl transform transition-transform duration-2500 hover:scale-105" src="/2banner_1.webp" alt="Banner-2" />
                    </div>
                    <div className="h-[272px] w-[625px] overflow-hidden rounded-xl">
                        <img className="w-[625px] rounded-xl transform transition-transform duration-2500 hover:scale-105"  src="/2banner_2.webp" alt="Banner-3" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;