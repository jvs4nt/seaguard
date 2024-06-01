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

export const BigCard = styled.div`
    display: flex;
    margin-top: 100px;
    width: 95%;
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
    `;
    

export const BigImg = styled.img`
    width: 20%;
    `;

