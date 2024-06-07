import React from 'react';
import LogoGreyImg from './../../assets/logo-grey-blue.png';
import { FooterBox } from './Footer.style';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    // function handleLogin() {
    //     navigate('/');
    // }

    function handleHome() {
        navigate('/home');
    }

    return (
        <>
            <FooterBox>
                <img src={LogoGreyImg} alt="" width={'100'} onClick={handleHome} />
                <p>| João Santos - 554328 | Willian Daniel - 552671 | Ryan Azanha - 553324</p>
            </FooterBox>
        </>
    );
}

export default Footer;  