import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'
import Agree from './Agree.tsx'
import { SignUpFormValues } from '../../types'
import { signupSchema } from '../../validation.ts'

const SignUpForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  })
  const value = watch()
  const onSubmit: SubmitHandler<SignUpFormValues> = data => {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="nickname"
        placeholder="닉네임"
        value={value}
        register={register}
        setValue={setValue}
        errorMsg={errors?.nickname?.message ?? ''}
      />
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
        errorMsg={errors?.password?.message ?? ''}
      />
      <Agree />
      <AuthButton text="완료하기" />
    </FormContainer>
  )
}

const FormContainer = styled.form`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default SignUpForm
