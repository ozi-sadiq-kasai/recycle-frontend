import './Footer.css';
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='footer'>

            <ul className='footer-contact'>
                <li>
                    <BsTelephonePlus />
                    <p>080000000</p>
                </li>
                <li>
                    <MdOutlineMarkEmailUnread />
                    <p>ecosip@gmail.com</p>
                </li>
                <li>
                    <MdOutlinePlace />
                    <p>Lagos,Nigeria</p>
                </li>
            </ul>
         
            <ul className='footer-social'>
                <li>
                    <FaXTwitter size={25} />
                </li>
                <li>
                    <CiFacebook size={25} />
                </li>
                <li>
                    <IoLogoInstagram size={25} />
                </li>
            </ul>
   <div className='footer-logo'>
                <h3>EcoSip</h3>
                <p>© 2025 EcoSip. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
