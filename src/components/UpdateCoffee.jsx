import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

      const loaderCoffee = useLoaderData();
      // console.log(loaderCoffee);
      const { _id, name, chef, supplier, taste, category, details, photo } = loaderCoffee;

      const handleUpdateCoffee = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;

            const updateCoffee = { name, chef, supplier, taste, category, details, photo };

            fetch(`http://localhost:7000/coffee/${_id}`, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(updateCoffee)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.matchedCount > 0) {
                              alert('Coffee Updated Successfully')
                        }
                  })
      }


      return (
            <div>
                  <div className='bg-[#F4F3F0] p-24'>
                        <form onSubmit={handleUpdateCoffee}>
                              <h1 className='text-2xl font-extrabold text-center mb-5'>Update Coffee: {loaderCoffee.name}</h1>
                              {/* form row coffee name & chef name */}
                              <div className='md:flex md:gap-4 mb-5'>
                                    <div className="form-control md:w-1/2">
                                          <label className="label">
                                                <span className="label-text text-xl font-medium">Name</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" name='name' defaultValue={name} placeholder="coffee name" className="input input-bordered w-full" />
                                          </label>
                                    </div>

                                    <div className="form-control md:w-1/2">
                                          <label className="label">
                                                <span className="label-text text-xl font-medium">Chef</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" defaultValue={chef} placeholder="chef name" name='chef' className="input input-bordered w-full" />
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
                                                <input type="text" defaultValue={supplier} name='supplier' placeholder="supplier name" className="input input-bordered w-full" />
                                          </label>
                                    </div>

                                    <div className="form-control md:w-1/2">
                                          <label className="label">
                                                <span className="label-text text-xl font-medium">Taste</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" defaultValue={taste} placeholder="coffee taste" name='taste' className="input input-bordered w-full" />
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
                                                <input type="text" defaultValue={category} name='category' placeholder="category name" className="input input-bordered w-full" />
                                          </label>
                                    </div>

                                    <div className="form-control md:w-1/2">
                                          <label className="label">
                                                <span className="label-text text-xl font-medium">Details</span>
                                          </label>
                                          <label className="input-group">
                                                <input type="text" defaultValue={details} placeholder="coffee details" name='details' className="input input-bordered w-full" />
                                          </label>
                                    </div>
                              </div>
                              {/* photo */}
                              <div className="form-control mb-5">
                                    <label className="label">
                                          <span className="label-text text-xl font-medium">Photo</span>
                                    </label>
                                    <label className="input-group">
                                          <input type="photo_URL" defaultValue={photo} placeholder="photo URL" name='photo' className="input input-bordered w-full" />
                                    </label>
                              </div>
                              {/* form row submit */}
                              <input type="submit" value="Update Coffee" className='btn btn-block btn-neutral mt-5' />

                        </form>
                  </div>
            </div>
      );
};

export default UpdateCoffee;