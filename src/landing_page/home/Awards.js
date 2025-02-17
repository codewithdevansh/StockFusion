import React from 'react'

function Awards() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker' />
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million StockFusion clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='col-3 mt-3'>
                        <ul>
                            <li>Future and Options</li>
                            <li>Commodity Derivatives</li>
                            <li>Currency Derivatives</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;