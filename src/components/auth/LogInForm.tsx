import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'
import { AuthFormValues } from '../../types'

const LogInForm = () => {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<AuthFormValues>()

  const onSubmit: SubmitHandler<AuthFormValues> = data => {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="email"
        placeholder="이메일"
        helperText="이메일"
        register={register}
      />
      <AuthInput
        name="password"
        placeholder="비밀번호"
        helperText="영문 특수문자"
        register={register}
      />
      <AuthButton text="로그인" />
      <SignUpButton onClick={() => navigate('/signUp')}>회원가입</SignUpButton>
    </FormContainer>
  )
}
const FormContainer = styled.form`
  width: 540px;
`
const SignUpButton = styled.button`
  margin: 30px 15px 0 auto;
  display: block;
  ${({ theme }) => theme.typographies.SUB_TITLE};
  color: ${({ theme }) => theme.colors.GRAY};
`
export default LogInForm
