import SayHello from "./SubCompounents/SayHello";
import DireBonjour from "./SubCompounents/DireBonjour";
import {MakeTheTextBigger} from "./SubCompounents/MakeTheTextBigger";
import ThemeChooser from "./SubCompounents/ThemeChooser";
import './styles.css'


function printFullName(firstName , lastName){
    return `${firstName} ${lastName}`
}



function alertFullName(){
    alert("I'm alerting you your full name ")
}

export function  PropsPractice(){
    let firstName="Oussama"
    let lastName="Bouchanane"
    return(
        <ThemeChooser isDark={true}>
            <SayHello personFirstName={firstName} personLastName={lastName} fullName={function (){  return printFullName(firstName , lastName) }  } alertFullname={alertFullName}   />
            <DireBonjour> Ousamma boucahanaeeeeeeeeee </DireBonjour>
            <MakeTheTextBigger> Make me bigger</MakeTheTextBigger>

            <MakeTheTextBigger>
                <div>Make me bigger 1 </div>
                <div>Make me bigger 2</div>
                <div>Make me bigger  3</div>
                <div>Make me bigger 4</div>

            </MakeTheTextBigger>
        </ThemeChooser>



    )
}
