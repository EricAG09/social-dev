import styled from "styled-components"
import Link from "next/link"
import {useForm} from "react-hook-form" 
import {joiResolver} from "@hookform/resolvers/joi"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

import ImageWithSpace from "../src/componentes/layout/ImageWithSpace"
import H1 from "../src/componentes/tipografia/H1"
import H2 from "../src/componentes/tipografia/H2"
import H4 from "../src/componentes/tipografia/H4"
import Button from "../src/componentes/inputs/Button"
import Input from "../src/componentes/inputs/Input"
import { loginSchema } from "../modules/user/user.schema"

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

const fetcher = url => axios.get(url).then(res => res.data)

function Login () {
    const router = useRouter()
    
    const {control, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: joiResolver(loginSchema)
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        try{
            const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
            if (status === 200) {
                router.push("/")
            }
            setLoading(true)
        } catch ({response}) {
            if (response.data === 'password incorrect') {
                setError('password', {
                    message: 'senha incorreta.'
                })
            }
            else if (response.data === 'not found') {
                setError('userOrEmail', {
                    message: 'usuário não encontrado.'
                })
            }
        } finally{
            setLoading(false)
        }
    }

    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>
            <FormContainer>
                <H2>Entre em sua Conta</H2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Email ou Usuário" name="userOrEmail" control={control}/>
                    <Input label="Senha" type="password" name="password" control={control}/>
                    <Button loading={loading} type='submit' disabled={Object.keys(errors).length > 0}>Entrar</Button>
                </Form>
                <Text>Não possui uma conta?<Link href="/signup">Faça seu cadastro</Link></Text>
            </FormContainer>
        </ImageWithSpace>
    )
}

export default Login