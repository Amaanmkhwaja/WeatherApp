import React, { useEffect, useState } from 'react'
// import "./Popup.css"
import "../../../popup.css";
import PubSub from 'pubsub-js'



// function Popup(props) {
//   return (props.trigger) ? (
//     <div className="popup">
//         <div className="popup-inner">
//             <button className="close-bttn" onClick={() => props.setTrigger(false)}>close</button>
//             { props.children }
//         </div>
//     </div>
//   ) : "";
// };
const Popup = () => {
    const [message, setMessage] = useState("")
    useEffect(() => {
        PubSub.subscribe('openPopup', (e, data) => {
            const list = {
                16: 'Thick down jacket',
                10: 'thin down jacket',
                7: 'cotton jacket',
                6: 'wool sweater',
                4: 'pizex',
                3: 'thin jacket',
                2: 'long sleeve',
                1: 'short sleeve'
            }


            const arr = [16, 10, 7, 6, 4, 3, 2, 1]
            for (let i = 0; i < arr.length; i++) {
                if (data >= arr[i]) {
                    setMessage(`Today's weather is good for ${list[arr[i]]}`)
                    return;
                }
            }
        })
    })
    const closePopup = e => {
        let userClicked = e.currentTarget;
        userClicked.parentNode.parentNode.classList.add("hidden");
    };

    return (
        <div className="hidden popupDisplay">
            {/* <button>Close</button> */}
            {/* <h3>Recommended Clothing</h3> */}

            <div className="innerPopup">
                <button onClick={closePopup}>Close</button>
                <h3>Recommended Clothing</h3>
                <div className='clothes mt-10'>
                    <i className='iconfont icon-yurongfu3 f100'></i>
                    <i className='iconfont icon-TROUSERS f100'></i>
                    <span className='mt-10'>{message}</span>
                </div>
            </div>
            <div className="backgroundPopup"></div>
        </div>
    );
};

export default Popup; 