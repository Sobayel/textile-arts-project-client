import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const AddCraft = () => {
    const { user } = useAuth()
    const handleAddCraft = event => {
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
        const email = form.email.value;
        const user = form.user.value;
        const newCraft = {name, subcategory, description,stock, customization, processing,price,rating,image,email,user};
        console.log(newCraft);


        fetch('http://localhost:5000/addCraft',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Craft Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] py-5 px-24 rounded-xl">
            <h2 className="text-4xl font-bold text-blue-500 flex justify-center">Add Craft</h2>
            <form onSubmit={handleAddCraft}>
                <div className="md:flex gap-10 mt-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Item Name"
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Subcategory Name"
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
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing" placeholder="Enter Processing Time"
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
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Enter Rating"
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
                            <select className="select w-full" name="customization">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Stock Status</span>
                        </label>
                        <label className="input-group">
                        <select className="select w-full" name="stock">
                                <option>In Stock</option>
                                <option>Made to order</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-10 mt-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email"  placeholder= {user?.email || 'user not available'}
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user" placeholder={user?.displayName || 'user not available'}
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mt-4">
                    <input type="submit" value="Add Craft" className="w-full bg-primary btn text-xl font-semibold" />
                </div>
            </form>
        </div>
    );
};

export default AddCraft;