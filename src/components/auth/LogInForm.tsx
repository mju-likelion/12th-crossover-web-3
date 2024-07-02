import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'
import { AuthFormValues } from '../../types'
import { loginSchema } from '../../validation.ts'
import { postLogin } from '../../api/auth.ts'

const LogInForm = () => {
  const navigate = useNavigate()

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  })
  const value = watch()
  const onSubmit: SubmitHandler<AuthFormValues> = async data => {
    try {
      const response = await postLogin(data)
      if (response.statusCode === '200') alert('로그인 되었습니다!')
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="email"
        placeholder="이메일"
        value={value}
        register={register}
        setValue={setValue}
        errorMsg={errors?.email?.message ?? ''}
      />
      <AuthInput
        name="password"
        placeholder="비밀번호"
        value={value}
        register={register}
        setValue={setValue}
        errorMsg={errors.password?.message ?? ''}
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
