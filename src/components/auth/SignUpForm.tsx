import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getTerms, postSignup } from '../../api/auth.ts'
import Agree from './Agree.tsx'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'
import { Agreement, SignUpFormValues, Term } from '../../types'
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

  const [terms, setTerms] = useState<Term[]>([
    {
      termId: 'b39a908b-26c1-4562-9df3-0a89463c81fa',
      content: '내용',
    },
  ])

  const onSubmit: SubmitHandler<SignUpFormValues> = async data => {
    console.log(data)
    console.log(terms)

    if (terms.length > 0) {
      const agreements: Agreement[] = terms.map(term => ({
        termId: term.termId,
        agreed: data.checkbox,
      }))

      const { checkbox, ...rest } = data // checkbox 필드를 제외하고 나머지 필드를 복사
      const dataWithTermId = { ...rest, agreements } // 새로운 객체에 agreements를 추가

      try {
        const response = await postSignup(dataWithTermId)
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const terms = await getTerms()
      console.log(terms)
      setTerms(terms || [])
    }
    fetchData()
  }, [])

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
      <Agree
        name="checkbox"
        value={value}
        register={register}
        setValue={setValue}
        text={terms[0]?.content || '개인정보 동의 내용'}
      />
      {errors?.checkbox?.message && (
        <HelperText>{errors?.checkbox?.message}</HelperText>
      )}
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
const HelperText = styled.p`
  ${({ theme }) => theme.typographies.HELPER_TEXT};
  color: ${({ theme }) => theme.colors.RED};
`

export default SignUpForm
