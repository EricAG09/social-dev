import styled from "styled-components"

const PostContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`
const StyledUserName = styled.p`
    font-weight: bold;
    font-size: 18px;
`
const StyledDate = styled.p`
    font-size: 12px;
`
const ContainerText = styled.div`
    margin-top: 20px;
`


function Post () {
    return (
        <PostContainer>
            <StyledUserName>@username</StyledUserName>
            <StyledDate>13/04/2001</StyledDate>
            <ContainerText>Este é um texto teste.</ContainerText>
        </PostContainer>
    )
}

export default Post