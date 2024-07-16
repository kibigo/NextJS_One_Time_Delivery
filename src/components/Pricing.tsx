"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface Route{
    id:number;
    name:string;
    price:number;
}

interface Routes{
    [key: string]: Route[];
}

interface Location{
    id:number;
    name:string;
    routes:Routes;

}

interface ApiResponse{
    locations: Location[];
}

const Pricing: React.FC = () => {

    const [routes, setRoute] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedRoutes, setSelectedRoutes] = useState<Route[]>([]);
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        axios.get('https://api.jsonsilo.com/public/33f21f1a-3f0d-4339-adfc-13ee5091840c')
        .then((response) => {
            const locationsData: Location[] = response.data.locations;
            const routesData = locationsData.map((location: Location) => (location.name));
            
            setRoute(routesData);
            setLocations(locationsData);

            console.log('This are routes', locationsData)
            
        })
        .catch((error) => console.log('Error fetching data', error));
    }, []);



    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const locationName = event.target.value;
        setSelectedLocation(locationName);


        //find corresponding routes
        const selectedLocationData = locations.find(location => location.name === locationName);
;
        if(selectedLocationData){
            
            //const routeArray = selectedLocationData?.routes;
            const routeArray = Object.values(selectedLocationData.routes).flat();

            setSelectedRoutes(routeArray);
        }else{
            setSelectedRoutes([]);
        }
    };
    

  return (
    <section className='relative mx-auto bg-backgroundBlue'>

        <div className='container p-10 mx-auto items-center text-center'>

            <h2 className='text-3xl'>Choose the destination</h2>
            <p className='text-2xl mt-5'>The prices below are calibrated from Nairobi town </p>

            <div className='mt-5 text-2xl'>
                <select onChange={handleSelectChange}>
                    <option>Select Destination</option>
                    {routes.map((routes, index) => (
                        <option className='mt-2 w-10' value={routes}>{routes}</option>
                    ))}
                </select>
            </div>
            
            {selectedLocation && (
                <div className='mt-5'>

                    <div className='relative overflow-x-auto'>

                        <table className='w-full text-gray-500'>
                            <thead className='text-gray-700 uppercase text-left'>
                                <th className='px-6 py-3 font-bold' scope='col'>Destination</th>
                                <th className='px-6 py-3 font-bold' scope='col'>Price</th>
                            </thead>

                            <tbody className='text-left'>
                                {selectedRoutes.map((item, index) => (
                                    <tr className='border-b border-gray-400'>
                                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                            {item.name}
                                        </th>

                                        <td className='px-6 py-4'>
                                            {item.price}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            
        </div>
    </section>
  )
}

export default Pricing