import React from 'react'

function Cheackout({currentuser}) {
    return (
        <div className="center outer_cheackout-wrap">

            <h2 className="thank-you">Thank You!</h2>
            <div className="inner_cheackout wrap">
                <div className="cheack-tic"><i class="fa fa-check" aria-hidden="true"></i></div>
                <h4>Your order has been received</h4>
            <h4 className="user_name">{currentuser.email}</h4>
            </div>

        </div>
    )
}

export default Cheackout
