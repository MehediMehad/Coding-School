import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Skils from "../Skils/Skils";
import SuccessStudents from "../SuccessStudents/SuccessStudents";

const Home = () => {
    return (
        <div>
            <div className=""></div>
            <div className="">
                <Banner></Banner>
                <Services></Services>
                <SuccessStudents></SuccessStudents>
                <Skils></Skils>
            </div>
        </div>
    );
};

export default Home;