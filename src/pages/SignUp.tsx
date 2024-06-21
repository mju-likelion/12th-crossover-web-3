import styled from 'styled-components'
import SignUpForm from '../components/auth/SignUpForm.tsx'

const SignUp = () => {
  return (
    <PageWrapper>
      <Title>회원가입</Title>
      <SignUpForm />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  margin: 200px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 64px;
  padding: 24px;
  ${({ theme }) => theme.typographies.MAIN_TITLE};
`

export default SignUp
