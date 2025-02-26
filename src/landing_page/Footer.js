import React from 'react'

function Footer() {
    return (
        <div className='container column mt-5 ' style={{backgroundColor:'white'}}>
            <div className='row'>
                {/* <div className='col-2'></div> */}
                <div className='col-3'>
                    <img src='media/images/zerodha_logo.svg' alt='zerodha_logo' style={{ height:'5%', width:'60%' }} />
                    <p className='mt-3' style={{fontSize:'80%'}}>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col-3'>
                    <p className='mb-4' style={{fontWeight:'450', fontSize:'120%'}}>Company</p>

                    <p>About</p>
                    <p>Products</p>
                    <p>Pricing</p>
                    <p>Referral Programs</p>
                    <p>Carrers</p>
                    <p>Zerodha.tech</p>
                    <p>Open Source</p>
                    <p>Press & Media</p>
                    <p>Zerodha Cares (CSR)</p>

                </div>
                <div className='col-3'>
                    <p className='mb-4'style={{fontWeight:'450', fontSize:'120%'}}>Support</p>

                    <p>Contact Us</p>
                    <p>Support Portal</p>
                    <p>Z-connect blog</p>
                    <p>List of charges</p>
                    <p>Downloads & resources</p>
                    <p>Videos</p>
                    <p>Market Overview</p>
                    <p>How to file a complaint?</p>
                    <p>Status of your complaints</p>

                </div>
                <div className='col-3'>
                    <p className='mb-4' style={{fontWeight:'450', fontSize:'120%'}}>Account</p>

                    <p>Open an Account</p>
                    <p>Fund Transfer</p>

                </div>
                {/* <div className='col-2'></div> */}
            </div>
            <div className='column mt-5'>
                <p style={{fontSize:'65%'}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p style={{fontSize:'65%'}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p style={{fontSize:'65%'}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                <p style={{fontSize:'65%'}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p style={{fontSize:'65%'}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p style={{fontSize:'65%'}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            </div>
            <div className='row' style={{alignItems:'center', justifyContent:'center'}}>
                <p className='col-1' style={{fontSize:'75%'}}>NSE</p>
                <p className='col-1' style={{fontSize:'75%'}}>BSE</p>
                <p className='col-1' style={{fontSize:'75%'}}>MCX</p>
                <p className='col-1' style={{fontSize:'75%'}}>Terms & Conditions</p>
                <p className='col-1' style={{fontSize:'75%'}}>Policies & procedures</p>
                <p className='col-1' style={{fontSize:'75%'}}>Privacy policy</p>
                <p className='col-1' style={{fontSize:'75%'}}>Disclosure</p>
                <p className='col-1' style={{fontSize:'75%'}}>For investor's attention</p>
                <p className='col-1' style={{fontSize:'75%'}}>Investor charter</p>
            </div>
        </div>
    );
}

export default Footer;