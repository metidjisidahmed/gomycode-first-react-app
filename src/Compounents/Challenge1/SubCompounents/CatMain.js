import Cat from "../../../assets/images/Cat.png";


const  CatTables=(props)=>{


    return(
        <section>
            <h3>Available cat breed to buy :</h3>
            <table border={1}>
            <tr>
                <th>Breed name</th>
                <th>Price</th>
                <th>Image preview</th>
            </tr>

                { props.catsArrays.map(cat=>{
                    return(
                        <tr>
                            <td>{cat.breedName}</td>
                            <td className="prices">{cat.price}$</td>
                            <td><img height="100px" width="100px" src={cat.imageLink} alt=""/></td>
                        </tr>
                    )
                })}
        </table>
        </section>
    )
}

const LoveCats =(props) =>{


    return(
        <section>
            <h2>Cat Lists</h2>
            <h3>Things cats love:</h3>
            <ul>
                {
                    props.catsLove.map(love=>{
                        return(
                            <li>{love}</li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

const HateCats=(props)=>{

    return(
        <section>
            <h3>Top 3 things cats hate:</h3>
            <ol>
                {props.catsHate.map(hate=>{
                    return(
                        <li>{hate}</li>
                    )
                })}
            </ol>
        </section>
    )
}

const CatsLoveLasagna=()=>{
    return(
        <section>
            <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
                 alt="A slice of lasagna on a plate."/>
            <figcaption>Cats <em>love</em> lasagna.</figcaption>
        </section>
    )
}

const  FormsCats =()=>{
    return(
        <section>
            <h3 id="buy_a_cat_title">Buy a Cat !</h3>
            <form action="https://www.google.com/" method="post">
                <label htmlFor="cat_owner_name">Your full name : </label>
                <input id="cat_owner_name" name="cat_owner_name" type="text" placeholder="Type your  name here"/>
                <br/>
                <label htmlFor="cat_owner_email">Your Email : </label>
                <input id="cat_owner_email" name="cat_owner_email" type="email"
                       placeholder="Type your email  here"/>
                <br/>
                <label htmlFor="cat_owner_phone_number">Your Phone nummber : </label>
                <input id="cat_owner_phone_number" name="cat_owner_phone_number" type="tel"
                       placeholder="Type your phone number  here"/>
                <br/>
                <label htmlFor="select_breed">Cat Breed</label>
                <select name="select_breed" id="select_breed">
                    <option value="WebTrack">Siamese</option>
                    <option value="WebTrack">Sphynx</option>
                    <option value="AITrack">Persian</option>
                    <option value="GameTrack">Maine Coon</option>
                    <option value="DataScienceTrack">Ragdoll</option>
                </select>
                <br/>
                <label htmlFor="cat_name">Give your cat a Name : </label>
                <input id="cat_name" name="cat_name" type="text" placeholder="Type your cat name here"/>
                <br/>
                <label htmlFor="why_buy_cat">Tell us why you would buy a cat !</label>
                <textarea id="why_buy_cat" name="why_buy_cat" cols="30" rows="3"></textarea>
                <br/>
                <label className="prices" htmlFor="pick_date">Pick a date to get your cat
                    : </label>
                <input id="pick_date" name="cat_name" type="date"
                       placeholder="Type your cat name here"/>
                <br/>
                <p style={ { backgroundColor: "greenyellow"}} >Ah sorry ! I forget to teel you to
                    specify the Cat gender you want :</p>
                <input type="radio" id="male" name="cat_gender" value="Male"/>
                <label htmlFor="male">Male</label><br/>
                <input type="radio" id="female" name="cat_gender" value="female"/>
                <label htmlFor="female">Female</label><br/>
                <hr/>

                <input type="checkbox" id="agree_terms"/> <label
                htmlFor="agree_terms">I agree to the terms and
                conditions</label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


  function CatMain(props){




    return(
        <main>
            <section>
                <h2>Cat Photos</h2>
                {/*TODO: Add link to cat photos*/}
                <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
                <a href="https://freecatphotoapp.com"><img
                    src={Cat}
                    alt="A cute orange cat lying on its back."/> </a>
            </section>

            <LoveCats catsLove={props.catsLove}/>

            <HateCats catsHate={props.catsHate}/>

            <CatsLoveLasagna/>
            <section>
                <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
                     alt="Five cats looking around a field."/>
                <figcaption>Cat <strong>hate</strong> other cats.</figcaption>
            </section>

            <CatTables catsArrays={props.catArrays}/>

            <FormsCats/>
            <mohcen> Je suis mohcen</mohcen>
            <p id="hover_me"> Hover me to change my color </p>
        </main>
    )
}


export default CatMain
