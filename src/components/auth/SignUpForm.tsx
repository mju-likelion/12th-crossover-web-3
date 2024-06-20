import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'
import { SignUpFormValues } from '../../types'

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpFormValues>()

  const onSubmit: SubmitHandler<SignUpFormValues> = data => {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="nickname"
        placeholder="닉네임"
        helperText="텍스트"
        register={register}
      />
      <AuthInput
        name="email"
        placeholder="이메일"
        helperText="이메일"
        register={register}
      />
      <AuthInput
        name="password"
        placeholder="비밀번호"
        helperText="영문 숫자 특수기호"
        register={register}
      />
      <AuthButton text="완료하기" />
    </FormContainer>
  )
}

const FormContainer = styled.form`
  width: 540px;
`

export default SignUpForm
