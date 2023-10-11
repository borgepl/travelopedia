import logo from "../../../images/logo192.png";
import '../../../css/style.css';

function Header() {
    return (<div><MainHeader></MainHeader></div>)
  }
  
  function MainHeader() {
    return (
      <div className="pt-2 py-2 m-2 border-bottom">
        <img src={logo} alt="" className="px-2" style={{height : "35px"}}></img>
        <span className='heading1'>React Course - TravelOpedia</span>
      </div>
    )
  }

  

  export default Header;