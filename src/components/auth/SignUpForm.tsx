import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'
import { SignUpFormValues } from '../../types'
import { signupSchema } from '../../validation.ts'

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<SignUpFormValues> = data => {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="nickname"
        placeholder="닉네임"
        register={register}
        errorMsg={errors?.nickname?.message ?? ''}
      />
      <AuthInput
        name="email"
        placeholder="이메일"
        register={register}
        errorMsg={errors?.email?.message ?? ''}
      />
      <AuthInput
        name="password"
        placeholder="비밀번호"
        register={register}
        errorMsg={errors?.password?.message ?? ''}
      />
      <AuthButton text="완료하기" />
    </FormContainer>
  )
}

const FormContainer = styled.form`
  width: 540px;
`

export default SignUpForm
