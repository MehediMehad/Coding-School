import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Skils from "../Skils/Skils";
import SuccessStudents from "../SuccessStudents/SuccessStudents";
import Rewiws from "../../../components/Rewiws";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className=""></div>
            <div className="">
                <Banner></Banner>
                <Services></Services>
                <Skils></Skils>
                <Rewiws></Rewiws>
                <SuccessStudents></SuccessStudents>
            </div>
        </div>
    );
};

export default Home;