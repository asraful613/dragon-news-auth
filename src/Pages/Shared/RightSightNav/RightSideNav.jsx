import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import qzone from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
            </div>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle>
                    google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>
                    github
                </button>
                <div className='p-4  mb-6'>
                    <h2 className="text-3xl mb-4">Find Us on</h2>
                    <a className='p-4 flex  text-lg items-center border rounded-t-lg' href="">
                        <FaFacebook className='mr-2'></FaFacebook>
                        facebook
                    </a>
                    <a className='p-4 flex  text-lg items-center border-x  ' href="">
                       <FaTwitter className='mr-2'></FaTwitter>
                        twitter
                    </a>
                    <a className='p-4 flex  text-lg items-center border rounded-b-lg' href="">
                        <FaInstagram mr-2></FaInstagram>
                        facebook
                    </a>
                </div>
                <div className='p-4 space-y-3 mb-6'>
                    <h2 className="text-3xl">Q Zone</h2>
                    <img src={qzone} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
        </div>
    );
};

export default RightSideNav;