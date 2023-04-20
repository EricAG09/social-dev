import styled from "styled-components"

const Button = styled.button`
    background-color: ${props => props.theme.primary};
    padding:  15px 20px;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    color: white;
    transition: 0.3s;

    ${props => !props.disabled && 'cursor: pointer;'}

    :hover {
        background-color: ${props => props.theme.primaryHover};
    }

    :disabled {
        backgrond-color: grey;
    }
`

export default Button