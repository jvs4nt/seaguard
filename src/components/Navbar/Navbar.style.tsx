import { styled } from "styled-components";


export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    background-color: #001624;
    border-bottom: 2px solid #032D60;
    padding: 5px;
    font-size: 1rem;
    height: 7vh;
    position: fixed; 
    width: 100%; 
    z-index: 1000; 
    margin: 0;
`;

export const Options = styled.nav`
  display: flex;
  gap: 40px;
  margin-right: 40px;

  @media (max-width: 768px) {
    display: none;
  }

  li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #bcceeb;
    font-weight: 500;
    font-size: 1.2rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: #85aded;
    }
  
  }
`;


export const Img = styled.img`
    width: 10rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

`;

export const MobileMenu = styled.div`
    display: none;
    cursor: pointer;
    color: black;
    z-index: 1100;
    @media (max-width: 768px) {
        display: flex;
        background-color: white;
        flex-direction: column;
        width: 120px;
        height: 150px;
        position: fixed;
        right: 0;
        top: 0;
    }
    border: 1px solid #032D60;
`;

export const MobileBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const MobileLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #000;
    font-weight: 500;
    font-size: 1.2rem;
    transition: 0.3s;

    &:hover {
        color: #00A1E0;
    }
`;

export const Menu = styled.div`

    display: none;
    cursor: pointer;
    color: black;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 30px;
        height: 20px;
        margin-left: auto;
    }
`;

export const IconImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 30px;
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
`;

export const CloseDiv = styled.div`
  width: 100%;
`;

export const Close = styled.p`
  text-align: right;
  margin-right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
`;