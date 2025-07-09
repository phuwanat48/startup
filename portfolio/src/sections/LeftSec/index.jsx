import Header from "../header";
import Navbar from "../navbar";
import Contract from "../contract";


const LeftSec = () => {
    return (
        <div>
            <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[90vh]'>     {/* fix left side bar*/}

                <Header />
                <Navbar />
                <Contract/>


            </div>
        </div>
    );
}

export default LeftSec;