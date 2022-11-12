


export default function SayHello(props){
    console.log("THe say Hello props are =", props)
    return(
        <>
            <div>Hello {props.personFirstName} {props.personLastName}</div>
            <div>My fullname is  : {props.fullName()}</div>
            <button onClick={props.alertFullname} > Click Me to tell my full name  </button>
        </>


    )
}
