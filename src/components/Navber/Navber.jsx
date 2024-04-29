import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navber = () => {
    const { logout, user } = useAuth()
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArtMap">All Art & craft Items</NavLink></li>
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
                <a data-aos="fade-left" data-aos-delay="1000" className="btn btn-ghost btn-sm md:btn-md lg:btn-lg font-bold text-sm md:text-2xl lg:text-4xl"> <span className="text-purple-700">Textile</span>Arts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 font-semibold text-sm px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <div>
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                <div>
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
        </div>
    );
};

export default Navber;