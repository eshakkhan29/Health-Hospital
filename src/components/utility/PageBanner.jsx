

const PageBanner = ({ children }) => {
    return (
        <>
            <div style={{ backgroundImage: "url(/img/page-bg.png)" }} className='relative h-[417px] flex items-center justify-center '>
                    <div className="absolute opacity-90 z-10 top-0 left-0  h-[417px] w-full bg-[#012a4a] bg-blend-overlay">
                    </div>
                    <h1 className='text-secondary z-50 font-bold text-[56px] text-center'>{children}</h1>
            </div>
        </>
    );
};

export default PageBanner;