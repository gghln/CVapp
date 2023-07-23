/* eslint-disable react/prop-types */
function CV ({firstName,lastName,email,phoneNumber}){
    return(
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
        </div>
    )
}

export default CV