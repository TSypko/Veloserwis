import styled from "styled-components";
import pricingImage from "../../images/pricing.jpg";

export const StyledPricing = styled.div`
    background: url(${pricingImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    box-shadow: inset 0px 10px 20px -5px rgba(0,0,0,0.75);
    position: relative;
    overflow: hidden;
    z-index: 0;
    &::after {
        content: "";
        background: #00000044;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;
export const PricingContainer = styled.div`
    margin: 0 auto;
    padding: 100px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    max-width: 1200px;
    z-index: 1;
    @media (max-width: 768px) {
        padding: 50px 30px;
        grid-template-columns: auto;
        }
    @media (max-width: 360px) {
        padding: 30px 10px;
        grid-template-columns: auto;
        }
`;
export const Card = styled.div`
    background: var(--secondary);
    padding: 5px 20px;
    width: 100%;
    box-shadow: 0px 0px 5px 1px #999;
    overflow: hidden;
`;
export const Title = styled.h3`
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    text-align: center;
`;

export const List = styled.ul`
   list-style-type: none;
   padding: 0px;
`;
export const Item = styled.li`
   display: flex;
   align-items: baseline;

   @media (max-width: 380px) {   
        align-items: center;
        }
   &::after {

        content: "";
        border-bottom: 1px dotted;
        flex-grow: 1;
        order: 2;
        margin: 0 2px;

        @media (max-width: 380px) {   
        border-bottom: none;
        align-items: center;
        }
        
   }
`;
export const Position = styled.div`
   order: 1;
   font-size: 15px;
   line-height: 2;
`;
export const Price = styled.div`
   font-size: 15px;
   order: 3;
   color: var(--primary);
   font-weight: 700;
`;
export const Subtitle = styled.span`
   font-size: 15px;
   font-weight: 700;
`;