import styled from 'styled-components'
import { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form'

interface AuthFieldValues<TFieldValues extends FieldValues> {
  name: keyof TFieldValues
  placeholder: string
  helperText: string
  register: UseFormRegister<TFieldValues>
}

function AuthInput<TFieldValues extends FieldValues>({
  name,
  placeholder,
  helperText,
  register,
}: AuthFieldValues<TFieldValues>) {
  return (
    <InputContainer>
      <InputBox>
        <Input
          placeholder={placeholder}
          {...register(name as FieldPath<TFieldValues>)}
        />
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
