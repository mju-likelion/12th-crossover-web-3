import styled from 'styled-components'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'

const SignUpForm = () => {
  return (
    <FormContainer>
      <AuthInput placeholder="영문 숫자" helperText="아이디" />
      <AuthInput placeholder="영문 숫자 특수기호" helperText="비밀번호" />
      <AuthInput placeholder="이메일" helperText="이메일" />
      <AuthButton text="완료하기" />
    </FormContainer>
  )
}

const FormContainer = styled.div`
  width: 540px;
`

export default SignUpForm
