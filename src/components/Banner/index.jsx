function Banner(){
    return(
        <>
            <div className="relative w-full overflow-hidden">
                <img className="w-full h-auto object-cover animate-fade-in" src="/slider_1.webp" alt="Banner-1" />
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 absolute top-[20%] sm:top-[30%] md:top-[35%] lg:top-[420px] gap-4 sm:gap-6">
                    <div className="h-auto sm:h-[200px] md:h-[250px] lg:h-[272px] w-full sm:w-[280px] md:w-[400px] lg:w-[625px] overflow-hidden rounded-xl group">
                        <img 
                            className="w-full h-full rounded-xl transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl object-cover animate-slide-in-left" 
                            src="/2banner_1.webp" 
                            alt="Banner-2" 
                        />
                    </div>
                    <div className="h-auto sm:h-[200px] md:h-[250px] lg:h-[272px] w-full sm:w-[280px] md:w-[400px] lg:w-[625px] overflow-hidden rounded-xl group">
                        <img 
                            className="w-full h-full rounded-xl transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl object-cover animate-slide-in-right" 
                            src="/2banner_2.webp" 
                            alt="Banner-3" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;