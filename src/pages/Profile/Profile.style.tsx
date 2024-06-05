import styled from 'styled-components';
import mainbg from './../../assets/main-bg.svg';

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    min-width: 100vw;
    background-image: url(${mainbg});
    background-size: cover;
    padding-top: 50px;
`;

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 50%;
    padding: 30px;
    border-radius: 10px;
    background-color: #001624;
    color: #bcceeb;
    transition: 0.3s;

    h2 {
        color: #bcceeb;
        transition: 0.3s;

        &:hover {
            color: #85aded;
        }
    }

    span {
        color: #85aded;
        font-weight: bold;
    }

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 800px) {
        width: 90%;
    }
`;

export const Title = styled.h1`
    color: #bcceeb;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        font-size: 8rem;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    background-color: #001624;
    color: #bcceeb;
    transition: 0.3s;

    h2 {
        color: #bcceeb;
        transition: 0.3s;

        &:hover {
            color: #85aded;
        }
    }

    span {
        color: #85aded;
        font-weight: bold;
    }

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 800px) {
        width: 90%;
    }
`;

export const InfoLabel = styled.label`
    color: #bcceeb;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 1200px) {
        font-size: 8rem;
    }
`;

export const InfoInput = styled.input`
    color: #bcceeb;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    padding: 10px;

    @media (max-width: 1200px) {
        font-size: 8rem;
    }
`;