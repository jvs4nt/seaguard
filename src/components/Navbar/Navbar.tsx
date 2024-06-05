import React from 'react';
import { CloseDiv, IconImg, Img, MobileBox, MobileLink, NavbarStyle, Options } from './Navbar.style';
import { useNavigate } from 'react-router-dom';
import menuIcon from './../../assets/menu.png';
import LogoGreyImg from './../../assets/logo-grey-blue.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{
                        display: 'flex',
                        backgroundColor: '#001624',
                        flexDirection: 'column',
                        width: '200px',
                        height: '100%',
                        position: 'fixed',
                        right: 0,
                        top: 0,
                        zIndex: 1100,
                        border: '1px solid #032D60'
                    }}
                >
                    <MobileBox>
                        <CloseDiv onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#bcceeb' }} size='2x' />
                        </CloseDiv>
                        <MobileLink onClick={handleHome}>Inicio</MobileLink>
                        <MobileLink onClick={handleProfile}>Perfil</MobileLink>
                        <MobileLink onClick={handleLogin}>Sair</MobileLink>
                    </MobileBox>
                </motion.div>
            )}
        </>
    );
}

export default Navbar;  