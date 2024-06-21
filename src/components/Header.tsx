import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import logout from '../assets/logout.svg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Logo onClick={() => navigate('/')}>
        <img src={logo} alt="비행기레터 로고" />
      </Logo>
      <LogoutButton onClick={() => alert('로그아웃')}>
        <img src={logout} alt="로그아웃" />
      </LogoutButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  padding: 40px 360px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`
const Logo = styled.button``
const LogoutButton = styled.button``
export default Header
