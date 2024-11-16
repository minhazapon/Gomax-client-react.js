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
            
                   
        </div>
    );
};

export default Home;