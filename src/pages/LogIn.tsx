import styled from 'styled-components'
import LogInForm from '../components/auth/LogInForm.tsx'

const LogIn = () => {
  return (
    <PageWrapper>
      <Title>로그인</Title>
      <LogInForm />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  margin-top: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 64px;
  padding: 24px;
  ${({ theme }) => theme.typographies.MAIN_TITLE};
`
export default LogIn
