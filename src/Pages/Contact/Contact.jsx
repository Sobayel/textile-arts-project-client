

const Contact = () => {
    return (
        <div className="px-8 py-12 text-center my-8">
            <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="my-6 font-thin">
                Textile arts fuse creativity with functionality, spanning weaving, knitting, dyeing, and embroidery. Rooted in <br /> global traditions, these practices intertwine culture and innovation, offering tactile storytelling and sustainable expressions. <br />Contemporary textile artists continue to push boundaries, showcasing the enduring relevance and versatility of textile techniques.
                </p>
                <div>
                    <img className="w-32 h-32 rounded-full mx-auto justify-center" src="https://i.ibb.co/1Q0nc8Y/ceo.jpg" alt="" />
                    <h3 className="text-xl font-semibold">Emily</h3>
                    <p>Textile Arts CEO</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mx-auto justify-center mt-16">
                    <div>
                        <img className="w-24 h-24 rounded-full mx-auto justify-center" src="https://i.ibb.co/bsgkMFh/s1.jpg" alt="" />
                        <h3 className="text-xl font-semibold">Olivia</h3>
                        <p>Embroidery Manager</p>
                    </div>
                    <div>
                        <img className="w-24 h-24 mx-auto justify-center rounded-full" src="https://i.ibb.co/XYtgtMw/young.jpg" alt="" />
                        <h3 className="text-xl font-semibold">Watson</h3>
                        <p>Crocheting Manager</p>
                    </div>
                    <div>
                        <img className="w-24 h-24 mx-auto justify-center rounded-full" src="https://i.ibb.co/2dY3DvQ/s2.jpg" alt="" />
                        <h3 className="text-xl font-semibold">Amelia</h3>
                        <p>Quilting Manager</p>
                    </div>
                    <div>
                        <img className="w-24 h-24 mx-auto justify-center rounded-full" src="https://i.ibb.co/kxcCrPL/ssss.jpg" alt="" />
                        <h3 className="text-xl font-semibold">Johnson</h3>
                        <p>Beadwork Manager</p>
                    </div>
                    <div>
                        <img className="w-24 h-24 mx-auto justify-center rounded-full" src="https://i.ibb.co/y6nnFR5/s3.jpg" alt="" />
                        <h3 className="text-xl font-semibold">Sophia</h3>
                        <p>Tie-Dyeing Manager</p>
                    </div>
                    <div>
                        <img className="w-24 h-24 mx-auto justify-center rounded-full" src="https://i.ibb.co/5BqXN4q/handsome111.jpg" alt="" />
                        <h3 className="text-xl font-semibold">Brown King</h3>
                        <p>Macrame Manager</p>
                    </div>
                    
                </div>
        </div>
    );
};

export default Contact;