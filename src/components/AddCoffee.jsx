
const AddCoffee = () => {

      const handleAddCoffee = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;

            const newCoffee = { name, chef, supplier, taste, category, details, photo };
            console.log(newCoffee);

            fetch('http://localhost:7000/coffee', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(newCoffee)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                              alert('Coffee added Successfully')
                        }
                  })
      }


      return (

            <div className='bg-[#F4F3F0] p-24'>
                  <form onSubmit={handleAddCoffee}>
                        <h1 className='text-2xl font-extrabold text-center mb-5'>Add New Coffee</h1>
                        {/* form row coffee name & chef name */}
                        <div className='md:flex md:gap-4 mb-5'>
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Name</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name='name' placeholder="coffee name" className="input input-bordered w-full" />
                                    </label>
                              </div>

                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Chef</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" placeholder="chef name" name='chef' className="input input-bordered w-full" />
                                    </label>
                              </div>
                        </div>

                        {/* form row supplier taste */}
                        <div className='md:flex md:gap-4 mb-5'>
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name='supplier' placeholder="supplier name" className="input input-bordered w-full" />
                                    </label>
                              </div>

                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Taste</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" placeholder="coffee taste" name='taste' className="input input-bordered w-full" />
                                    </label>
                              </div>
                        </div>
                        {/* form row category details*/}
                        <div className='md:flex md:gap-4 mb-5'>
                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Category</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" name='category' placeholder="category name" className="input input-bordered w-full" />
                                    </label>
                              </div>

                              <div className="form-control md:w-1/2">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Details</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="text" placeholder="coffee details" name='details' className="input input-bordered w-full" />
                                    </label>
                              </div>
                        </div>
                        {/* photo */}
                        <div className="form-control mb-5">
                              <label className="label">
                                    <span className="label-text text-xl font-medium">Photo</span>
                              </label>
                              <label className="input-group">
                                    <input type="photo_URL" placeholder="photo URL" name='photo' className="input input-bordered w-full" />
                              </label>
                        </div>
                        {/* form row submit */}
                        <input type="submit" value="Add Coffee" className='btn btn-block btn-neutral mt-5' />

                  </form>
            </div>
      );
};

export default AddCoffee;