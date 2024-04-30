import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const ArtCraftDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card._id.toString() === id)
    console.log(card);
    const {name, subcategory, description,stock, customization, processing,price,rating,image} = card || {};
    return (
        <div>
            <h2 className='text-4xl md:text-5xl text-purple-600 font-bold flex justify-center'>Art & Craft Details Page</h2>
            <Card className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 pr-4  shadow-none mt-12 flex-row">
            
        <CardHeader
          shadow={false}
          floated={false}
          className="m-8 col-span-2 rounded-2xl bg-[#F3F3F3]"
        >
          <img className="w-full h-80 rounded-2xl py-6 px-6"
            src={image}
            alt="card-image"
            
          />
        </CardHeader>
        <CardBody className="col-span-2 mt-12">
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
            <NavLink to='/' className="btn btn-outline hover:bg-slate-400 hover:text-black mt-4">Back to Home Page</NavLink>
          </Typography>
        </CardBody>
      </Card>
        </div>
    );
};

export default ArtCraftDetails;