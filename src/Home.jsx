import BrowseCategoris from "./home file/BrowseCategoris";
import CompanyLogo from "./home file/CompanyLogo";
import Discount from "./home file/Discount";
import HomeBanner from "./home file/HomeBanner";
import PrimeHoody from "./home file/PrimeHoody";
import Save from "./home file/Save";
import ServiceInformation from "./home file/ServiceInformation";




const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>    
            <CompanyLogo></CompanyLogo> 
            <Save></Save>
            <Discount></Discount>
            <BrowseCategoris></BrowseCategoris>
            <PrimeHoody></PrimeHoody>
            <ServiceInformation></ServiceInformation>
            
                   
        </div>
    );
};

export default Home;