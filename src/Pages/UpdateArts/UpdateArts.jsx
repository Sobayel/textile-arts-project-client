import { useLoaderData } from "react-router-dom";

const UpdateArts = () => {
    const arts = useLoaderData();
    const {_id, name, subcategory, description,stock, customization, processing,price,rating,image } = arts || {};

    const handleUpdateArts = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const processing = form.processing.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const newCraft = {name, subcategory, description,stock, customization, processing,price,rating,image};
        console.log(newCraft);


        fetch(`http://localhost:5000/addCraft/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedArts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Arts Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="py-5 px-24 rounded-xl">
            <h2 className="text-4xl font-bold text-blue-500 flex justify-center">Update Arts & Craft</h2>
            <form onSubmit={handleUpdateArts}>
                <div className="md:flex gap-10 mt-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Item Name" defaultValue={name}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Subcategory Name"
                            defaultValue={subcategory}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-10 mt-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Enter Description"
                            defaultValue={description}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing" placeholder="Enter Processing Time" defaultValue={processing}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-10 mt-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Enter Price"
                            defaultValue={price}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Enter Rating"
                            defaultValue={rating}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Enter Photo URL"
                            defaultValue={image}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-10 mt-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Customization</span>
                        </label>
                        <label className="input-group">
                            <select className="select w-full" name="customization" defaultValue={customization}>
                                <option disabled selected>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Stock Status</span>
                        </label>
                        <label className="input-group">
                        <select className="select w-full" name="stock" defaultValue={stock}>
                                <option disabled selected>In Stock</option>
                                <option>Made to order</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="mt-4">
                    <input type="submit" value="Update Craft" className="w-full bg-primary btn text-xl font-semibold" />
                </div>
            </form>
        </div>
    );
};

export default UpdateArts;