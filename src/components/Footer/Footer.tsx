import React from 'react';
import LogoGreyImg from './../../assets/logo-grey-blue.png';
import { FooterBox } from './Footer.style';

const Footer: React.FC = () => {
    // const navigate = useNavigate();

    // function handleLogin() {
    //     navigate('/');
    // }

    // function handleHome() {
    //     navigate('/home');
    // }


    // function toggleMenu() {
    //     setIsOpen(!isOpen);
    // }

    return (
        <>
            <FooterBox>
                <img src={LogoGreyImg} alt="" width={'100'} />
            | All Rights Reserved - 2024
            </FooterBox>
        </>
    );
}

export default Footer;  