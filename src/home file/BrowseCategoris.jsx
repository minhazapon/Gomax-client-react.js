


const BrowseCategoris = () => {


    return (
        <div className=" mt-10 mb-10 ">


            <div className=" flex-col md:flex-row lg:flex-row  mb-10 flex justify-between items-center p-5 ">
            <p className=" text-5xl universe text-center">Browse Categories</p>
            <a href="#_" class="inline-flex overflow-hidden text-white bg-black rounded group  mt-2">
            <span class="px-3.5 py-2 text-white bg-blue-950 group-hover:bg-black flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </span>
            <span class="pl-4 pr-5 py-2.5  text-2xl universe ">View all collection</span>
            </a>
            </div>

            <div className=" flex justify-center p-5">
            <div className=" grid  md:grid-cols-5 gap-20 ">
            <div className=" transition duration-300 ease-in-out hover:scale-110">
            <img className=" h-[200px] w-[200px] rounded-full " src="https://gomax.themeasy.co/wp-content/uploads/2023/10/48-1-1.jpg" alt="" />
            <p className=" bg-black btn text-white  -mt-20 ">Handbags</p>
            </div>
            <div className=" transition duration-300 ease-in-out hover:scale-110">
            <img className=" h-[200px] w-[200px] rounded-full " src="https://gomax.themeasy.co/wp-content/uploads/2023/10/2-2.jpg" alt="" />
            <p className=" bg-black btn text-white  -mt-20 ">Sunglasses</p>
            </div>
            <div className=" transition duration-300 ease-in-out hover:scale-110">
            <img className=" h-[200px] w-[200px] rounded-full " src="https://gomax.themeasy.co/wp-content/uploads/2023/10/49-1-1.jpg" alt="" />
            <p className=" bg-black btn text-white  -mt-20 ">Accessories</p>
            </div>
            <div className=" transition duration-300 ease-in-out hover:scale-110">
            <img className=" h-[200px] w-[200px] rounded-full " src="https://gomax.themeasy.co/wp-content/uploads/2023/10/20-1.jpg" alt="" />
            <p className=" bg-black btn text-white  -mt-20 ">Beanies</p>
            </div>
            <div className=" transition duration-300 ease-in-out hover:scale-110">
            <img className=" h-[200px] w-[200px] rounded-full " src="https://gomax.themeasy.co/wp-content/uploads/2023/10/24-1-2.jpg" alt="" />
            <p className=" bg-black btn text-white  -mt-20 ">Sneakers</p>
            </div>
            </div>
            </div>

            
        </div>
    );
};

export default BrowseCategoris;