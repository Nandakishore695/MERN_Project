import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllUser = () => {
    const [apiData, setApiData] = useState([]);
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;

    useEffect(() => {
        getMultiList();
    }, []);

    const getMultiList = async () => {
        try {
            const apiResponse = await axios.get(`${apiUrl}/user/alluser `, { headers: { "Content-Type": "application/json" } },
                { withCredentials: true });
            setApiData(apiResponse.data.users);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
            <section className='container mt-2'>
                <div className="row ">
                    {apiData.map((item, index) => {
                        return <div className="col-xl-3 col-lg-2 " key={index}>
                            {item.name}
                            {item.role}
                            {item.email}
                            {item.createDate}
                        </div>
                    })}
                </div>
            </section>
    )
}

export default AllUser;
