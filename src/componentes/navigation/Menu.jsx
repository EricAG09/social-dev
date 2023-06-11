import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Dots = styled.img`
    cursor: pointer;
`
const StyledMenu = styled.div`
    position: absolute;
    width: 200px;
    right: 0;
    background-color: ${props => props.theme.white};
    box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);

    display: ${props => props.show ? 'block' : 'none'};
`

const StyledContainerMenu = styled.div`
    position: relative;
`

const StyledOption = styled.div`
    padding: 15px;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.inputBackground}
    }
`

const Menu = ({options = []}) => {
    const [show, setShow] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setShow(false)
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [menuRef])

    const handleClick = (onClick) => {
        setShow(false)
        onClick()
    }

    return (
        <StyledContainerMenu>
            <Dots src="/three-dots.svg" heidht="20px" onClick={() => setShow(!show)}/>
            <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
                {
                    options.map((option, pos) => 
                        <StyledOption 
                            key={`menu-option-${pos}`}
                            onClick={() => handleClick(option.onClick)}
                        >
                            {option.text}
                        </StyledOption>
                    )
                }
            </StyledMenu>
        </StyledContainerMenu>
    )
}

export default Menu