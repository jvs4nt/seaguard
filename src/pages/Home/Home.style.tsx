import styled from 'styled-components';
import mainbg from './../../assets/main-bg.svg';

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200vh;
    min-width: 100vw;
    background-image: url(${mainbg});
    background-size: cover;
    

`;

export const TransparentBigCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 95%;
    padding: 30px;
    min-height: 70vh;

    border-radius: 10px;
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
        min-height: 50vh;
    }

    @media (max-width: 800px) {
        min-height: 45vh;
    }
`;

export const Title = styled.h1`
    color: #bcceeb;
    font-size: 11rem;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        font-size: 8rem;
    }

    @media (max-width: 800px) {
        font-size: 3rem;
    }
    
    `;

export const SubTitle = styled.h2`
    color: #bcceeb;
    font-size: 2rem;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 1200px) {
        font-size: 1.5rem;
    }

    @media (max-width: 800px) {
        font-size: 1rem;
    }
    `;

export const BigCard = styled.div`
    display: flex;
    width: 90%;
    padding: 30px;
    min-height: 70vh;
    background-color: #001624;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    h2 {
        color: #bcceeb;
        font-size: 2rem;
        font-weight: 100;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    span {
        color: #85aded;
        font-weight: bold;
    }

    @media (max-width: 1300px) {
        flex-direction: column;
    }

    @media (max-width: 800px) {
        padding: 20px;
        width: 100%;
        border-radius: 0;
    }

    `;

export const VideoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 30px;
    min-height: 70vh;
    background-color: #001624;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    iframe {
        width: 90%;
        height: 600;
        border-radius: 10px;
    }

    h2 {
        color: #bcceeb;
        font-size: 2rem;
        font-weight: 100;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    span {
        color: #85aded;
        font-weight: bold;
    }

    @media (max-width: 1300px) {
        flex-direction: column;
    }

    @media (max-width: 800px) {
        padding: 20px;
        width: 100%;
        border-radius: 0;
    }

    `;

export const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 100%;
    max-width: fit-content;

    p {
        color: #bcceeb;
        font-size: 1.5rem;
        font-weight: 100;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: justify;
    }

    @media (max-width: 1300px) {
        width: 100%;

        p {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 800px) {
        padding: 20px;
        p {
            font-size: 1rem;
        }
    }
    `;

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
    gap: 20px;

    @media (max-width: 1300px) {
        width: 70%;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }

    @media (max-width: 800px) {
        justify-content: center;
        width: 70%;
        padding: 20px;
    }
    `;

export const ObserveDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    `;

export const MediumImg = styled.img`
    width: 50%;
    border-radius: 10px;
    border: 3px solid #032D60;
    `;
    

export const BigImg = styled.img`
    width: 20%;
    `;

export const RollDown = styled.h3`
    color: #bcceeb;
    font-size: 1.5rem;
    font-weight: 100;
    margin-top: 3%;
    `;

export const CirclesDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 7%;
    width: 100%;
    margin-bottom: 7%;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    `;

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 165px;
    height: 165px;
    background-color: #001624;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    margin-top: 10px;
    transition: 0.3s;

    p {
        color: #bcceeb;
        font-size: 1.5rem;
        font-weight: 100;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    &:hover {
        width: 175px;
        height: 175px;
    }
    `;


