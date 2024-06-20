import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import AuthInput from './AuthInput.tsx'
import AuthButton from './AuthButton.tsx'

const LogInForm = () => {
  const navigate = useNavigate()
  return (
    <FormContainer>
      <AuthInput placeholder="영문 숫자" helperText="아이디" />
      <AuthInput placeholder="영문 숫자" helperText="비밀번호" />
      <AuthButton text="로그인" />
      <SignUpButton onClick={() => navigate('/signUp')}>회원가입</SignUpButton>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  width: 540px;
`
const SignUpButton = styled.button`
  margin: 30px 15px 0 auto;
  display: block;
  ${({ theme }) => theme.typographies.SUB_TITLE};
  color: ${({ theme }) => theme.colors.GRAY};
`
export default LogInForm
