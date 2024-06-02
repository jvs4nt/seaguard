import styled from 'styled-components';
import mainbg from './../../assets/main-bg.svg';

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400vh;
    min-width: 99.1vw;
    margin: 0;
    padding: 0;
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
    height: 600px;
    background-color: rgba(23, 40, 151, 0.5);
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
`;

export const Title = styled.h1`
    color: #bcceeb;
    font-size: 11rem;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    
    `;

export const SubTitle = styled.h2`
    color: #bcceeb;
    font-size: 2rem;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 20px;
    `;

export const BigCard = styled.div`
    display: flex;
    width: 90%;
    padding: 30px;
    height: 600px;
    background-color: #001624;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

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
    `;

export const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;

    p {
        color: #bcceeb;
        font-size: 1.5rem;
        font-weight: 100;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: justify;
    }
    `;

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
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
    width: 70%;
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

