
import 'animate.css';


const PrimeHoody = () => {


    return (
        <div className=" mt-20 mb-24  p-5 bg-blue-50">
            <div>
            <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-48 '>
            <div>
            <img className=" animate__animated animate__flip animate__repeat-2 h-[200px] w-[200px]  rounded-full" 
            src="https://img.freepik.com/premium-vector/t-shirt-logo-vector-graphic-design_94353-26.jpg?semt=ais_hybrid" 
            alt="" />
            </div>
            <div>
            <p className=' text-center universe text-5xl'>PRIME HOODY</p>
            <p className=' universe text-3xl text-center mt-3'>$ 195.00</p>
            <div className=' flex justify-center mt-3'>
            <a href="#_" class="inline-flex overflow-hidden text-white bg-black rounded group">
            <span class="px-3.5 py-2 text-white bg-blue-950 group-hover:bg-black flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z">
            </path></svg>
            </span>
            <span class="pl-4 pr-5 py-2.5  text-xl universe ">BUY NOW</span>
            </a>
            </div>
            </div>
            <div>
            <img className=' h-[250px]' 
            src="https://gomax.themeasy.co/wp-content/uploads/2023/10/hoodie.png"
             alt="" />
            </div>
            </div>
            </div>
        </div>
    );
};

export default PrimeHoody;