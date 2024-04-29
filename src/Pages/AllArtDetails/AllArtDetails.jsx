import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";


const AllArtDetails = () => {
    return (
        <Card className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 pr-4  shadow-none mt-12 flex-row">
        <Helmet>
              <title>Arts Details</title>
          </Helmet>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-8 col-span-2 rounded-2xl bg-[#F3F3F3]"
      >
        <img data-aos="zoom-in" data-aos-delay="1000"
          src="https://i.ibb.co/wzTxX9Z/Quilting.jpg"
          alt="card-image"
          className="w-full h-80 rounded-2xl py-6 px-6"
        />
      </CardHeader>
      <CardBody className="col-span-2 mt-8">
      <Typography>
      <span className="font-semibold">Email: </span>mdsobayelhossain@gmail.com
        </Typography>
        <Typography>
        <span className="font-semibold">User Name: </span>Md.Sobayel hossain
        </Typography>
        <Typography variant="h5" color="gray" className="mb-2 font-bold uppercase">
          Item Name: Sobayel Hossain
        </Typography>
        <Typography color="blue-gray" className="mb-1">
          <span className="font-semibold">Subcategory: </span>Soba
        </Typography>
        <Typography data-aos="fade-left" data-aos-delay="1800" variant="h5" color="blue-gray" className="mb-1 text-lg font-normal">
        <span className="font-semibold">Description: </span> i can....
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-1 flex items-center mx-auto gap-2 text-lg font-normal">
        <span className="font-semibold">Processing Time:</span>01:23
        </Typography>
        <Typography>
        <span className="font-semibold">Customization: </span>yes
        </Typography>
        <Typography>
        <span className="font-semibold">Stock Status: </span>In Stock
        </Typography>
        <Typography>
          <div className="flex text-lg font-normal">
              <p><span className="font-semibold">Price: </span>1200</p>
              <p className="ml-16"><span className="font-semibold">Rating: </span>4.5</p>
          </div>
        </Typography>
        <Typography>
          <NavLink to='/allArt' className="btn btn-outline hover:bg-slate-400 hover:text-black mt-4">Back to All Arts</NavLink>
        </Typography>
      </CardBody>
    </Card>
    );
};

export default AllArtDetails;