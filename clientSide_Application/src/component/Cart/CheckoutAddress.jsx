import React from 'react'

const CheckoutAddress = () => {
    return (
        <div className='text-center container'>
            <h1>Order Summary</h1>
            <div className='text-center'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"  >Product Details</th>
                            <th scope="col">Shipping Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"  >Product Img</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Qty++</th>
                                            <th scope="col">Qty--</th>
                                            <th scope="col">remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><img src='https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg' width={50} /></th>
                                            <th scope="row">Redmi 13 5G Black Diamond 6GB 128GB</th>
                                            <th scope="row">6760</th>
                                            <th scope="row">1</th>
                                            <th scope="row">1</th>
                                            <th scope="row">1</th>
                                            <th scope="row">1</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <td>
                                <ul>
                                    <li>Name :</li>
                                    <li>Phone :</li>
                                    <li>Country :</li>
                                    <li>State :</li>
                                    <li>PinCode :</li>
                                    <li>Near By :</li>
                                </ul>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default CheckoutAddress;
