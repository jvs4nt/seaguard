import React from 'react';
import { Close, CloseDiv, IconImg, Img, Link, MobileBox, MobileLink, MobileMenu, NavbarStyle, Options } from './Navbar.style';
import { useNavigate } from 'react-router-dom';
import menuIcon from './../../assets/menu.png';
import LogoGreyImg from './../../assets/logo-grey-blue.png';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    function handleLogin() {
        navigate('/');
    }

    function handleHome() {
        navigate('/home');
    }


    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavbarStyle>
                <div>
                <Img onClick={handleHome} src={LogoGreyImg} alt="Logo da empresa" />
                </div>
                <div>
                <div onClick={toggleMenu}>
                    <IconImg src={menuIcon} alt="Menu" />
                </div>
                <Options>
                    <li>
                        <Link onClick={handleHome}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={handleLogin}>Sair</Link>
                    </li>
                </Options>
                </div>
                
            </NavbarStyle>
            {isOpen && (
                <MobileMenu>
                    <MobileBox>
                        <CloseDiv onClick={toggleMenu}>
                            <Close>x</Close>
                        </CloseDiv>
                        <MobileLink onClick={handleHome}>Home</MobileLink>
                        <MobileLink onClick={handleLogin}>Sair</MobileLink>
                    </MobileBox>
                </MobileMenu>
            )}
        </>
    );
}

export default Navbar;  