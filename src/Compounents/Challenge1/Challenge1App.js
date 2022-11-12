import logo from '../../logo.svg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import worldCupImage from "../../assets/images/img.png"


import CatMain from "./SubCompounents/CatMain";
import CatFooter from "./SubCompounents/CatFooter";
import CatHeader from "./SubCompounents/CatHeader";






function Challenge1App() {

    return (
        <>
            <CatHeader/>

            <CatMain/>

            <CatFooter/>

        </>


);
}

export default Challenge1App;
