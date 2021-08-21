import React from 'react'
import {ReactComponent as Music} from '../../assets/icon-music.svg'

import './plan.styles.scss'

const PlanComponent = () => (
    <div className='plan'>
        <div className='plan__plan-group'>
        <Music className='plan__music-svg' />
        <div className='plan__plan-detail'>
            <p className='plan__plan-name'>Annual Plan</p>
            <p className='plan__plan-price'>$59.99/year</p>
        </div>
        </div>
        
        <p className='plan__change-plan'>Change</p>
        
    </div>
)

export default PlanComponent;