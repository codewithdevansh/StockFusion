import React from 'react'

function NavBar() {
    return ( 
        <div className='row p-3 mt-3 ' style={{boxShadow:5}}>
            <div className='col-6'>
                <img src='media/images/zerodha_logo.svg' alt='zerodha_logo' style={{width:'30%', marginLeft:60}}/> 
            </div>
            <div className=' row col-6' style={{alignItems:'center', justifyContent:'center'}}> 
                <p className='col-2'>SignUp</p>
                <p className='col-2'>About</p>
                <p className='col-2'>Products</p>
                <p className='col-2'>Pricing</p>
                <p className='col-2'>Support</p>
            </div>
        </div>
        
     );
}

export default NavBar;