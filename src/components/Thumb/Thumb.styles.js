import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;

    
    border-radius: 20px;
    animation: animateThumb 0.5s;
    
     ${ props  => props.isHome ? 
     `:hover {
        transform: scale(1.05);
        opacity: 0.8;
    }`
        : ``
    };

    @keyframes animateThumb {
        from {
            opacity: 0;
            ${ props  => props.isHome ? 
            `transform: scale(0.01);` : ``};
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;