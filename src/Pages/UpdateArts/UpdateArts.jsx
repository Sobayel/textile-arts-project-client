

const UpdateArts = () => {
    return (
        <div className="bg-[#F4F3F0] py-5 px-24 rounded-xl">
            <h2 className="text-4xl font-bold text-blue-500 flex justify-center">Update Arts & Craft</h2>
            <form>
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
                            <select className="select w-full">
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
                        <select className="select w-full">
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