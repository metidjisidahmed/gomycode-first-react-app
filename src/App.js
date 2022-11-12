import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import worldCupImage from "./assets/images/img.png"


function MohammedMoudden(firstName , lastName , ageHtml){

    return(
        <>
            <div style={     { color : "red" , backgroundColor: "yellow" , fontSize : "2rem" }    } > My Name is { firstName + " " + lastName } </div>
            {ageHtml}
        </>

    )
}

function App() {
    let firstName = "Mohammed"
    let lastName = "Moudden"
    let ageValue = 36
    let age =(<i> My Age is {ageValue} </i>)

    let major = (<div>Je suis majeur et {age}  </div>)
    let mineur = (<div>Je suis mineur et {age} </div>)

    let elements = [ 1   ,    2,   3 ]

    return (
    <div className="App">
        <h1 className={ "title" }  id={ "myH1" } style={     { color : "red" , backgroundColor: "yellow" , fontSize : "2rem" }    }>i HOPE YOU UDERSTOOD WHAT I DID . HAVE A NICE DAY ! :^p </h1>
        <h2>Have a nice day !!!!</h2>
        <span className="badge badge-secondary">New</span>

        <FacebookIcon/>

        {/*<img src={"assets/images/img.png"} alt={"World Cup"}/>*/}
        <img src={ worldCupImage } alt=""/>
        { MohammedMoudden(firstName , lastName , age)  }
        { ageValue > 18 ? major : mineur}
        { elements.map(function (elem){
            return (<div>{elem}</div>)
        })}
        { MohammedMoudden(firstName , lastName , age)  }


        { MohammedMoudden(firstName , lastName , age)  }


        {/*{[ <div>1</div> ,<div>2</div> , <div>3</div> ]}*/}

    </div>

  );
}

export default App;
