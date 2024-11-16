import BrowseCategoris from "./home file/BrowseCategoris";
import CompanyLogo from "./home file/CompanyLogo";
import Discount from "./home file/Discount";
import HomeBanner from "./home file/HomeBanner";
import Save from "./home file/Save";




const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>    
            <CompanyLogo></CompanyLogo> 
            <Save></Save>
            <Discount></Discount>
            <BrowseCategoris></BrowseCategoris>
            
                   
        </div>
    );
};

export default Home;