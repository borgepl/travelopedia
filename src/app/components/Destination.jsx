import React, { useState } from 'react';
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from '../../api/destinationAPI';

function Destination({destination}) {

    const [deleteDestinationMutation] = useDeleteDestinationMutation();
    const [updateDestinationMutation] = useUpdateDestinationMutation();

    const [isUpdating, setIsUpdating] = useState(false);
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");

    const handleUpdate = () => {
        let city = "", country = "";
        if (newCity==="") {
            city = destination.city;
        } else {
            city = newCity;
        }
        if (newCountry==="") {
            country = destination.country;
        } else {
            country = newCountry;
        }

        updateDestinationMutation({
            id: destination.id,
            city: city,
            country: country,
            daysNeeded: destination.daysNeeded
        });

        setNewCity("");
        setNewCountry("");
        setIsUpdating(!isUpdating);
    }

  return (
    <div className='row text-center text-info p-2'>
    <div className='col-4 row offset-2'>
        <div className="row">
            <div className='col-6 p-1'>
                {isUpdating? (
                    <input type='text' placeholder='city...' className='form-control'
                    defaultValue={destination.city}
                    onChange={(e) => setNewCity(e.target.value)}/>
                ) : (
                    <span>{destination.city}</span>
                )}
            </div>
            <div className='col-6 p-1'>
            {isUpdating? (
                    <input type='text' placeholder='country...' className='form-control'
                    defaultValue={destination.country}
                    onChange={(e) => setNewCountry(e.target.value)}/>
                ) : (
                    <span>{destination.country}</span>
                )}
            </div>
        </div>
    </div>
    <div className='col-1 text-danger'>
        {destination.daysNeeded} days
    </div>
    <div className='col-3'>
        <button className='btn btn-warning ms-1 p-1'
        onClick={() => setIsUpdating(!isUpdating)}>{isUpdating ? "Cancel" : "Edit"}</button>
        { isUpdating ? <button className='btn btn-primary ms-1 p-1'
        onClick={() => handleUpdate()}>Update</button> : "" }
        <button className='btn btn-danger ms-1 p-1'
        onClick={() => deleteDestinationMutation({id:destination.id})}>Delete</button>
    </div> 
</div>
  )
}

export default Destination