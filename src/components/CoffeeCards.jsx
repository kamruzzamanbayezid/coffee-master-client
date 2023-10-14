import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
      // console.log(coffee);
      const { _id, name, chef, supplier, category, taste, photo } = coffee;

      const handleDelete = _id => {
            // console.log(_id);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`http://localhost:7000/coffee/${_id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);

                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your Coffee has been deleted.',
                                                'success'
                                          )
                                          const remaining = coffees.filter(coffee => coffee._id !== _id);
                                          setCoffees(remaining)
                                    }

                              })
                  }
            })
      }

      return (
            <div>
                  <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={photo} className="w-40 h-full" alt="Movie" /></figure>
                        <div className="flex justify-between w-full p-6">
                              <div>
                                    <h2 className="card-title">{name}</h2>
                                    <p>{chef}</p>
                                    <p>{supplier}</p>
                                    <p>{category}</p>
                                    <p>{taste}</p>
                              </div>
                              <div className="card-actions justify-end">
                                    <div className="btn-group btn-group-vertical space-y-5">
                                          <button className="btn">View</button>
                                          <Link to={`/updateCoffee/${_id}`}>
                                                <button className="btn">Update</button>
                                          </Link>
                                          <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CoffeeCards;