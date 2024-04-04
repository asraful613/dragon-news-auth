import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div>
            <div className="flex">
                <button className='btn btn-secondary'>Breaking News</button>
                <Marquee speed={100} pauseOnHover={true}>
        <Link className="mr-12 bg-gray-300" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
        <Link className="mr-12 bg-gray-300" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
        <Link className="mr-12 bg-gray-300" to={"/"}> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;