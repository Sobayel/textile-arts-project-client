

const MyArt = () => {
    return (
        <div className="bg-[#F4F3F0] py-5 px-24 rounded-xl">
            <h2 className="text-4xl font-bold text-blue-500 flex justify-center">My Craft</h2>
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
                            <span className="label-text font-semibold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="Enter Customization"
                            className="input input-bordered w-full select" />
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
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image"
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                <div className="mt-3">
                    <input type="submit" value="Update" className="w-full bg-primary btn text-xl font-semibold" />
                </div>
                <div className="mt-3">
                    <input type="submit" value="Delete" className="w-full bg-secondary btn text-xl font-semibold" />
                </div>
            </form>
        </div>
    );
};

export default MyArt;