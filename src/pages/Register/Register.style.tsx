import styled from 'styled-components'
import loginbg from './../../assets/login-bg.svg';

export const RegisterContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-image: url(${loginbg});
    
`;

export const RegisterCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 600px;
    min-height: 430px;
    background-color: #001624;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width: 800px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        padding-top: 10%;
        padding-bottom: 10%;
        margin-top: 0;
        margin-bottom: 0;
    }
`;