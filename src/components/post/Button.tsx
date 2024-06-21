import styled from 'styled-components'
import { Colors } from '../../styles/theme.ts'

interface ButtonProps {
  children: React.ReactNode
  color: keyof Colors
}

const Button: React.FC<ButtonProps> = ({ children, color, ...attrProps }) => {
  return (
    <ButtonBox $color={color} {...attrProps}>
      {children}
    </ButtonBox>
  )
}

const ButtonBox = styled.button<{ $color: keyof Colors }>`
  padding: 24px 82px;
  border-radius: 25px;
  color: white;
  ${({ theme }) => theme.typographies.SUB_TEXT};
  background-color: ${({ theme, $color }) => theme.colors[$color]};
`
export default Button
