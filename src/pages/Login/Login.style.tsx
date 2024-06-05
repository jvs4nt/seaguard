import styled from 'styled-components';
import loginbg from './../../assets/login-bg.svg';

export const LoginContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-image: url(${loginbg});

    `;

export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    min-height: 430px;
    background-color: #001624;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 800px) {
        padding: 20px;
        width: 100%;
        height: 100%;
        border-radius: 0;
        padding-top: 50%;
    }
    `;

export const LogoImg = styled.img`
    width: 300px;
    height: 100px;
    `;

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    `;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    min-width: 80%;

    label {
        color: #bcceeb;
        font-size: 15px;
        font-weight: 100;
        margin-bottom: 10px;
        text-align: left;
        margin-top: 20px;
        width: 80%;
        font-weight: bold;
    }

    `;

export const Input = styled.input`
    height: 40px;
    width: 80%;
    padding: 0 10px;
    border-radius: 5px;
    border: 3px solid #6664fd;
    background-color: #001624;
    font-weight: 100;
    `;

export const Button = styled.button`
    width: 80%;
    height: 40px;
    border-radius: 5px;
    background-color: #6664fd;
    color: #000;
    font-size: 15px;
    font-weight: bold;
    margin-top: 30px;
    `;

export const RegisterLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    color: #bcceeb;
    font-size: 15px;
    font-weight: 100;
    margin-top: 20px;
    transition: 0.3s;
    `;