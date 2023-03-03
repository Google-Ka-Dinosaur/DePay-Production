import React from 'react';
import classes from './features.module.css';
import Card from './cards';

const Features = props =>{
    return(
        <div className={`row justify-content-center`}>
           <Card title='LEND' text='Lend your money securely without worries of fradulent. The person who receives
           the amount will need your permission to use the money. Simply enter the amount and list the purpose and
            you are good to go.'
            image="https://i.ibb.co/bB53t8r/digital-payment-removebg-preview.png" />
            <Card title='USER-FRIENDLY' text='We have tried to build an user-friendly site with a funky design
           where you can easily find your way out to fulfill your purpose without any confusion.We give option such
           as give and take back that too on request acceptance. '
           image="https://i.ibb.co/ZSCXPnn/Screenshot-26-removebg-preview.png" />
           <Card title='RECEIVE' text='Receive the money you lent securely without fear of misue. Simply accept 
           the receive request and you are good to go.'
           image="https://i.ibb.co/BcDx2yN/Screenshot-20-removebg-preview-2.png" />
            <Card title='RECORD of TRANSACTIONS' text='We maintain a complete record of all your transactions with proper mention 
           of all the required details. You are just a click away from your transaction history. '
           image="https://i.ibb.co/qNr87K5/Screenshot-25-removebg-preview.png" />
            <Card title='SECURITY' text='Security was and will always be our main motive. We ensure that the user
           has the supreme control over the transaction.We used Block-Chain technology and tried our level best 
           to ensure safe transaction for all our customers. There will be no operation without the user consent.'
           image="https://i.ibb.co/0CDy24h/Screenshot-23-removebg-preview.png" />
           <Card title='GLOBAL RECORD' text='We maintain a global record of all the data in order to ensure absolute
           transparency from our side. We respect the trust of our customers the most.'
           image="https://i.ibb.co/Msz20NL/Screenshot-22-removebg-preview.png" />
           <Card title='INTEREST' text='The loan give and take back policy that we provide comes with an interest
           calculation policy where total interest over due course of time is reflected.'
           image="https://i.ibb.co/tXW6LHX/images-removebg-preview.png" />
           <Card title='JOINT ACCOUNT' text='We provide a joint account policy where two persons can operate on a
           single bank account. The access and approval lies with both. '
           image="https://i.ibb.co/wpv9WQr/112-joint-account-hodling-removebg-preview.png" />
           {/* <div className='col-md-4'><Card></Card></div> 
           <div className='col-md-4'><Card></Card></div>
           <div className='col-md-4'><Card></Card></div>
           <div className='col-md-4'><Card></Card></div>
           <div className='col-md-4'><Card></Card></div>
           <div className='col-md-4'><Card></Card></div> */}
        </div>
    )
}

export default Features;