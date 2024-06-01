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
    width: 400px;
    min-height: 400px;
    background-color: #001624;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `;

export const LogoImg = styled.img`
    width: 300px;
    height: 100px;
    `;

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
    `;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 80%;

    label {
        color: #bcceeb;
        font-size: 15px;
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
    font-weight: bold;
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