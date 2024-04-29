import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { NavLink, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const AllArtDetails = () => {
  const { user } = useAuth()
    const allCraft = useLoaderData();
    const { name, subcategory, description,stock, customization, processing,price,rating,image } = allCraft || {};
    return (
        <Card className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 pr-4  shadow-none mt-12 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-8 col-span-2 rounded-2xl bg-[#F3F3F3]"
      >
        <img data-aos="zoom-in" data-aos-delay="1000"
          src={image}
          alt="card-image"
          className="w-full h-80 rounded-2xl py-6 px-6"
        />
      </CardHeader>
      <CardBody className="col-span-2 mt-8">
      <Typography>
      <span className="font-semibold">Email: </span>{user?.email || 'user not available'}
        </Typography>
        <Typography>
        <span className="font-semibold">User Name: </span>{user?.displayName || 'user not available'}
        </Typography>
        <Typography variant="h5" className="mb-2 font-semibold">
          <span className="font-semibold">Item Name: </span>{name}
        </Typography>
        <Typography color="blue-gray" className="mb-1">
          <span className="font-semibold">Subcategory: </span>{subcategory}
        </Typography>
        <Typography className="mb-1">
        <span className="font-semibold">Description: </span>{description}
        </Typography>
        <Typography className="mb-1 flex items-center mx-auto gap-2">
        <span className="font-semibold">Processing Time:</span>{processing}
        </Typography>
        <Typography>
        <span className="font-semibold">Customization: </span>{customization}
        </Typography>
        <Typography>
        <span className="font-semibold">Stock Status: </span>{stock}
        </Typography>
        <Typography>
          <div className="flex">
              <p><span className="font-semibold">Price: </span>{price}</p>
              <p className="ml-16"><span className="font-semibold">Rating: </span>{rating}</p>
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