import styled from "styled-components"
import Link from "next/link"

import ImageWithSpace from "../src/componentes/layout/imageWithSpace"
import H1 from "../src/componentes/tipografia/H1"
import H2 from "../src/componentes/tipografia/H2"
import H4 from "../src/componentes/tipografia/H4"
import Button from "../src/componentes/inputs/Button"
import Input from "../src/componentes/inputs/Input"

const FormContainer = styled.div`
    margin-top: 60px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 20px;
`

const Text = styled.p`
    text-align: center;
`

function SignupPage () {
    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>
            <FormContainer>
                <H2>Crie sua Conta</H2>
                <Form>
                    <Input label="Nome" />
                    <Input label="Sobrenome" />
                    <Input label="Usuário" />
                    <Input label="Email ou Usuário" type="email" />
                    <Input label="Senha" type="password" />
                    <Button>Entrar</Button>
                </Form>
                <Text>Já possui uma conta?<Link href="/login">Faça seu Login</Link></Text>
            </FormContainer>
        </ImageWithSpace>
    )
}

export default SignupPage