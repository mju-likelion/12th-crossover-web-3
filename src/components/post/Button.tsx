import styled from 'styled-components'
import { Colors } from '../../styles/theme.ts'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  color: keyof Colors
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color,
  ...attrProps
}) => {
  return (
    <ButtonBox onClick={onClick} $color={color} {...attrProps}>
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
