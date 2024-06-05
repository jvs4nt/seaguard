import React from 'react';
import { Close, CloseDiv, IconImg, Img, MobileBox, MobileLink, MobileMenu, NavbarStyle, Options } from './Navbar.style';
import { useNavigate } from 'react-router-dom';
import menuIcon from './../../assets/menu.png';
import LogoGreyImg from './../../assets/logo-grey-blue.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    function handleLogin() {
        navigate('/');
    }

    function handleHome() {
        navigate('/home');
    }

    function handleProfile() {
        navigate('/profile');
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
                        <FontAwesomeIcon icon={faHome} />
                        <a onClick={handleHome}>Inicio</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPerson} />
                        <a onClick={handleProfile}>Perfil</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <a onClick={handleLogin}>Sair</a>
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
                        <MobileLink onClick={handleHome}>Inicio</MobileLink>
                        <MobileLink onClick={handleProfile}>Perfil</MobileLink>
                        <MobileLink onClick={handleLogin}>Sair</MobileLink>
                    </MobileBox>
                </MobileMenu>
            )}
        </>
    );
}

export default Navbar;  