import styled from "styled-components"

const Width_Break = "600px"

const StyledFlex = styled.div`
    display: flex;
`
const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;

    @media (max-width: ${Width_Break}){
        display: none;
    }
`
const StyledContainer = styled.div`
    background-color: white;
    padding: 30px;

    @media (min-width: ${Width_Break}){
        width: 100%;
        min-width: calc(${Width_Break} - 60px);
    }
    @media (max-width: ${Width_Break}){
        width: 100%;
    }
`



export default function ImageWithSpace ({children, image}) {
    return (
            <StyledFlex>
                <StyledImage image={image}/>
                <StyledContainer>
                    {children}
                </StyledContainer>
            </StyledFlex>
    )
} 
 ImageWithSpace.defaultProps = {
    image: '/coffee-background.jpg'
 }
