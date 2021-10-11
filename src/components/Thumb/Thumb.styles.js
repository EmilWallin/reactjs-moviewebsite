import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    

    :hover {
        width: 103%;
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
            width: 10%;
        }
        to {
            opacity: 1;
            width: 100%;
        }
    }
`;