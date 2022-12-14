import logo from '../../logo.svg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import worldCupImage from "../../assets/images/img.png"


import CatMain from "./SubCompounents/CatMain";
import CatFooter from "./SubCompounents/CatFooter";
import CatHeader from "./SubCompounents/CatHeader";






function Challenge1() {

    let catArrays= [
        {breedName : "Siamese" , price : 75 , imageLink : "https://www.litter-robot.com/media/blog/alex-meier-siamese.jpg" },
        {breedName : "Persian" , price : 40 , imageLink : "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80" },
        {breedName : "Sphynx" , price : 250 , imageLink : "https://www.litter-robot.com/media/blog/alex-meier-siamese.jpg" },
        {breedName : "Maine Coon" , price : 80 , imageLink : "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Maine-Coon-Cat.jpg?itok=XrHCK4xn" },
        {breedName : "Ragdoll" , price : 50 , imageLink : "https://www.catsbest.eu/wp-content/uploads/Ragdoll-1-e1607423517672.jpg" }

    ]

    let catsLove=[
        "cat nip" , "laser pointerss" , "lasagnaaa"
    ]

    let catsHate=[
        "flea treatment" , "thunder" , "other catsss"
    ]

    return (
        <>
            <CatHeader/>

            <CatMain catArrays={catArrays} catsLove={catsLove} catsHate={catsHate} />

            <CatFooter/>

        </>


);
}

export default Challenge1;
