import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = ()=>{
    return(
       <div className="home">
         <Navigation/>
         <Logo/>
         <Countries/>
          <h3>Accueil</h3>
       </div>
    )
}

export default Home;