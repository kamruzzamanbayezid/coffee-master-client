
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className='mt-10'>
        <h1 className='text-2xl font-bold text-center mb-5'>Our popular Coffee</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            coffees?.map(coffee => <CoffeeCards
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCards>)
          }
        </div>
      </div>
    </>
  )
}

export default App
