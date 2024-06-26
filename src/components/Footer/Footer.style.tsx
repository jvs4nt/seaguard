import styled from 'styled-components';

export const FooterBox = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001624;
    font-size: 0.8rem;
    width: 100%;
    height: 10vh;
    color: #bcceeb;
    font-weight: bold;

    img {
        cursor: pointer;

        &:hover {
            filter: brightness(0.8);
        }
    }
    `;