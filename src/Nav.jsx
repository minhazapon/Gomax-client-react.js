import { NavLink } from "react-router-dom";



const Nav = () => {

    const navZ = <>
    
       <li className=" the "><NavLink to='/' >Home</NavLink></li>
       <li className=" the "><NavLink to='/demos' >DEMOS</NavLink></li>
       <li className=" the "><NavLink to='/shop' >PAGE</NavLink></li>
       <li className=" the "><NavLink to='/blog' >BLOG</NavLink></li>
       <li className=" the "><NavLink to='/element' >PORTFOLIO</NavLink></li>
       <li className=" the "><NavLink to='/contact' >CONTACT US</NavLink></li>
    
    </>



    return (
        <div>

            <div className="navbar bg-base-100 shadow-md p-5 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navZ}
                  </ul>
                </div>
                <div className=" flex items-center gap-2">
                <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/1874/1874825.png" alt="" />
                <a className=" text-4xl the">Gomax</a>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {navZ}
                </ul>
              </div>
              <div className="navbar-end">
                <img className=" hover:border-[1px] border-black rounded-xl p-2 h-[50px] " src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="" />
              </div>
            </div>


            {/* ////////////////searchbar */}

            <div>
              <form class="w-full mx-auto">   
                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here" required />
                      <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                  </div>
              </form>
            </div>

            {/* <div className=" mt-5">
              <hr></hr>
            </div> */}
            
        </div>
    );
};

export default Nav;