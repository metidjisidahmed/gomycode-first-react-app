export function MakeTheTextBigger(props){

    console.log("Make Bigger props = ", props)
    return (

        <div style={{fontSize : "2em"}}>
            {props.children}
        </div>
    )
}
