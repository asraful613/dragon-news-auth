import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center my-5'>
            <img className='mx-auto mb-10' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">Sunday,November</p>
        </div>
    );
};

export default Header;