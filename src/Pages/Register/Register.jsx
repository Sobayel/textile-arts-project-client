
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import SocialSide from "../SocialSide/SocialSide";


const Register = () => {
    return (
        <div className="justify-center items-center w-96 border bg-slate-200 rounded-2xl mx-auto">
        <h1 data-aos="fade-up" data-aos-delay="1000" className="text-2xl font-bold flex justify-center my-2">Register form</h1>
    <form className="px-5 pt-4 mt-2">
        <div>
            <p data-aos="fade-up" data-aos-delay="1100" className="font-semibold">Name</p>
            <label data-aos="fade-up" data-aos-delay="1200" className="input input-bordered flex items-center gap-2">
                <input type="text" name="name" className="grow" placeholder="Name" 
                {...register("name", { required: true })}
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
        </div>

        <div>
            <p data-aos="fade-up" data-aos-delay="1300" className="font-semibold">Photo URL</p>
            <label data-aos="fade-up" data-aos-delay="1400" className="input input-bordered flex items-center gap-2">
                <MdOutlineAddPhotoAlternate></MdOutlineAddPhotoAlternate>
                <input type="text" name="photo" className="grow" placeholder="Your Photo URL" 
                {...register("photo")}
                />
            </label>
        </div>

        <div>
            <p data-aos="fade-up" data-aos-delay="1500" className="font-semibold">Email</p>
            <label data-aos="fade-up" data-aos-delay="1600" className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="email" name="email" className="grow" placeholder="Your Email"
                {...register("email", { required: true })}
                />
            </label>
        </div>

        <div>
            <p data-aos="fade-up" data-aos-delay="1700" className="font-semibold">Password</p>
            <label data-aos="fade-up" data-aos-delay="1800" className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input 
                type="password" 
                name="password" 
                className="grow" 
                placeholder="Password" 
                {...register("password", { required: true })}
                />
                
            </label>
        </div>
        <div data-aos="fade-up" data-aos-delay="1900" className="mt-3">
            <button type="submit" className="btn hover:bg-slate-200 hover:text-black w-full text-xl btn-secondary">Register</button>
        </div>
        <label  data-aos="fade-up" data-aos-delay="2000" className="label">
            Have an account?{" "}
            <Link to="/login" className="label-text-alt font-semibold text-sm text-blue-700 link link-hover">
              Please Login
            </Link>
          </label>
    </form>
    <SocialSide></SocialSide>
</div>
    );
};

export default Register;