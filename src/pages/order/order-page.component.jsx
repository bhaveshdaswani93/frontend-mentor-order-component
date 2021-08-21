import React from 'react'
import { ReactComponent as Hero } from '../../assets/illustration-hero.svg'

import './order-page.styles.scss'
import PlanComponent from '../../components/plan/plan.component'
import PaymentButton from '../../components/PaymentButton/payment-button.component'
import CancelButton from '../../components/CancelButton/cancel-button.component'


const OrderPage = ()=>(
    <div className='order-page'>
        <div className='order-page__hero-image-container'>
            <Hero className='order-page__hero-image' viewBox='0 0 450 220' />
        </div>
        <div className='order-page__summary'>
            <h2 className='order-page__summary-header'>Order Summary</h2>
            <p className='order-page__summary-text'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <PlanComponent />
            <PaymentButton />
            <CancelButton />

        </div>
        
    </div>
)

export default OrderPage;