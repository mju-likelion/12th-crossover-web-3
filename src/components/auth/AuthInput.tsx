import styled from 'styled-components'

interface AuthInputProps {
  placeholder: string
  helperText: string
}
const AuthInput: React.FC<AuthInputProps> = ({ placeholder, helperText }) => {
  return (
    <InputContainer>
      <InputBox>
        <Input placeholder={placeholder} />
      </InputBox>
      <HelperText>{helperText}</HelperText>
    </InputContainer>
  )
}
const InputContainer = styled.div``
const InputBox = styled.div`
  padding: 30px 28px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`
const Input = styled.input`
  ${({ theme }) => theme.typographies.SUB_TEXT};
`
const HelperText = styled.p`
  margin: 0 0 10px 22px;
  padding: 10px;
  ${({ theme }) => theme.typographies.HELPER_TEXT};
  color: ${({ theme }) => theme.colors.GRAY};
`
export default AuthInput
