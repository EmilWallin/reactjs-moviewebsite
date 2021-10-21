import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
        color: var(--darkGrey);
        text-align: center;
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    justify-content: center;

    animation: animateGridContent 1.3s;


@keyframes animateGridContent {
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
}

`;