import React, { useState } from 'react'
import { Slider, Toast } from 'antd-mobile'
import { HeartOutline } from 'antd-mobile-icons'
// import { DemoBlock } from 'demos'

const marks = {
    0: 'wear less',
    20: '',
    40: '',
    60: '',
    80: '',
    100: 'wear more',
}


const Preference = () => {
    let [value, setValue] = useState('60')

    let chan = (a)=>{
        // console.log(a)
    }
    return (
        <div className="hidden" id="preferenceDisplay">
            <h2>Weather & Clothes Preference</h2>
            <Slider style={{ '--fill-color': '#00b578' }} defaultValue={value} marks={marks} ticks  onChange={chan}/>
        </div>
    );
};


export default Preference;