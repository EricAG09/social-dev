import styled from "styled-components"
import Link from "next/link"

import ImageWithSpace from "../src/componentes/layout/ImageWithSpace"
import H1 from "../src/componentes/tipografia/H1"
import H2 from "../src/componentes/tipografia/H2"
import H4 from "../src/componentes/tipografia/H4"
import Button from "../src/componentes/inputs/Button"
import Input from "../src/componentes/inputs/Input"
import {useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import { signupSchema } from "../modules/user/user.schema"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

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
    const router = useRouter()
    const {control, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: joiResolver(signupSchema)
    })

    const [loading, setLoading] = useState(false)

    const handleForm = async (data) => {
        setLoading(true)
        try{
            const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/Signup`, data)
            if (status === 201) {
                router.push('/')
            }
            setLoading(true)
        } catch (err) {
            if (err.response.data.code === 11000 ){
                setError (err.response.data.duplicatedKey, {
                     type: 'duplicated' 
                })
            }
        } finally {
            setLoading(false)
        }
        
    }

    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>
            <FormContainer>
                <H2>Crie sua Conta</H2>
                <Form onSubmit={handleSubmit(handleForm)}>
                    <Input label="Nome" name='firstName' control={control} />
                    <Input label="Sobrenome" name='lastName' control={control}/>
                    <Input label="Usuário" name='user' control={control}/>
                    <Input label="Email" type="email" name='email' control={control}/>
                    <Input label="Senha" type="password" name='password' control={control}/>
                    <Button loading={loading} type='submit' disabled={Object.keys(errors).length > 0}>Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta?<Link href="/login">Faça seu Login</Link></Text>
            </FormContainer>
        </ImageWithSpace>
    )
}

export default SignupPage