


const HomeBanner = () => {
    return (
        <div className=" mb-20">

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://blog.tshirtplus.com.au/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-12-11.09.00-A-horizontal-layout-showcasing-a-collection-of-t-shirts-each-with-a-name-a-significant-date-and-a-year-printed-in-an-elegant-and-modern-typography.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content ">
              <div className="">
              <h1 className="mb-5 text-5xl the text-white font-bold">THE EVOLUTION OF BASIC T-SHIRTS</h1>
              <p className="mb-5 the  text-white">
              Cutting-edge technology to make you dress better.
              </p>
              <a href="#_" class="inline-flex overflow-hidden text-white bg-black rounded group">
              <span class="px-3.5 py-2 text-white bg-blue-950 group-hover:bg-black flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </span>
              <span class="pl-4 pr-5 py-2.5  text-2xl universe ">SHOP</span>
              </a>
              </div>
              </div>
            </div>
            
        </div>
    );
};

export default HomeBanner;