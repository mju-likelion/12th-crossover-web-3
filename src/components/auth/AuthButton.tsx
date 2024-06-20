import styled from 'styled-components'

type ButtonProps = {
  text: string
}
const AuthButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button type="submit">{text}</Button>
}

const Button = styled.button`
  width: 100%;
  margin-top: 56px;
  padding: 23px 0;
  border-radius: 25px;
  ${({ theme }) => theme.typographies.BUTTON};
  color: white;
  background-color: ${({ theme }) => theme.colors.BLUE_1};
`
export default AuthButton
