import React, { useState } from 'react';
import OtpInput from './OtpInput';

const PhoneOpt = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setshowOtpInput] = useState(false)

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault(); 
        
        //phone validations

        const regex = /[^0-9]/g;
        if (phoneNumber.length<10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number")
            return;
        } 

        setshowOtpInput(true)

    }


    const onOtpSubmit= () => {
        console.log("login in ")
    }

    return (
        <div>
          { !showOtpInput? (
          <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber} // Use onChange to update the state on input change
                    placeholder='Enter Phone Number'
                />
                <button type="submit">Submit</button>
            </form>
    ):(
            <div>
                <p>Enter OTP sent to {phoneNumber} </p>
                <OtpInput  length={4} onOtpSubmit= {onOtpSubmit} />
            </div> 
   )  }
   

        </div>
    );
}

export default PhoneOpt;
