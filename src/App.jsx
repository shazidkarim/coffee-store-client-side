/* eslint-disable no-unused-vars */

import { useLoaderData } from 'react-router-dom'
import './App.css'
import CofffeeCard from './components/CofffeeCard';

function App() {
 
  const coffees = useLoaderData();

  return (
    <div className='m-20'>
    
      <h1 className='text-6xl text-purple-600 text-center pb-6'>hot hot cold coffee:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-12'>
      {
        coffees.map(coffee=><CofffeeCard key={coffee._id} coffee={coffee}> </CofffeeCard>)
      }
      </div>
     
    </div>
  )
}

export default App
