import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navber = () => {
    const { logout, user } = useAuth()
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArt">All Art & craft Items</NavLink></li>
        <li><NavLink to="/addCraft">Add Craft Item</NavLink></li>
        <li><NavLink to="/myArt">My Art&Craft List</NavLink></li>
    </>
    return (
        <div className="navbar mt-3 bg-gray-200 mb-5 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                        {navLinks}
                    </ul>
                </div>
                <a data-aos="fade-left" data-aos-delay="1000" className="btn btn-ghost btn-sm md:btn-md lg:btn-lg font-bold text-sm md:text-2xl lg:text-4xl"> <span  className="text-purple-700">Textile</span>Arts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 font-semibold text-sm px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ? <div className="dropdown dropdown-end flex items-center gap-1">
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName || 'user not available'}>
                            <div>
                                <img className="lg:w-12 lg:h-12 w-8 h-8 md:w-10 md:h-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8rgf3bS/Sobayel.jpg"} />
                            </div>
                        </div>

                        <div>
                            <button 
                                onClick={logout}
                                className="btn btn-outline hover:bg-slate-400 hover:text-black ml-4 btn-sm md:btn-sm lg:btn-md text-sm md:text-lg lg:text-lg font-semibold">Logout</button>
                        </div>
                    </div>
                        :
                        <NavLink to='/login'>
                            <button className="btn btn-outline btn-sm md:btn-sm lg:btn-md text-sm md:text-lg lg:text-lg hover:bg-slate-400 hover:text-black ml-4 font-semibold">Login</button>
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default Navber;