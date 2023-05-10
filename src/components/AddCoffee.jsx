/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)
        
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(req=>req.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-6xl text-purple-600 text-center'>Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text text-2xl">coffee name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' placeholder="coffee name" className="input input-bordered w-full " />
                    </label>
                </div>
               <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text text-2xl">coffee quantity</span>
                    </label>
                    <label className="input-group">
                      
                        <input type="text" name='quantity' placeholder="coffee quantity" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text text-2xl">supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered w-full " />
                    </label>
                </div>
               <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text text-2xl">Taste</span>
                    </label>
                    <label className="input-group">
                      
                        <input type="text" name='taste' placeholder="coffee taste" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text text-2xl">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='category' placeholder="coffee category" className="input input-bordered w-full " />
                    </label>
                </div>
               <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text text-2xl">Details</span>
                    </label>
                    <label className="input-group">
                      
                        <input type="text" name='details' placeholder="coffee details" className="input input-bordered w-full" />
                    </label>
                </div>
               </div>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-full ">
                    <label className="label">
                        <span className="label-text text-2xl">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full " />
                    </label>
                </div>
               </div>
               <input className='text-3xl border md:w-full mt-4 p-4 bg-[#D2B48C]' type="submit" value="Add Coffee" />
            </form>

        </div>
    );
};

export default AddCoffee;