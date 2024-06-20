import styled from 'styled-components'
import { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form'

interface AuthFieldValues<TFieldValues extends FieldValues> {
  name: keyof TFieldValues
  placeholder: string
  register: UseFormRegister<TFieldValues>
  errorMsg: string
}

function AuthInput<TFieldValues extends FieldValues>({
  name,
  placeholder,
  register,
  errorMsg,
}: AuthFieldValues<TFieldValues>) {
  return (
    <InputContainer>
      <InputBox>
        <Input
          placeholder={placeholder}
          {...register(name as FieldPath<TFieldValues>)}
        />
      </InputBox>
      {errorMsg && <HelperText>{errorMsg}</HelperText>}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  margin-bottom: 16px;
`
const InputBox = styled.div`
  padding: 30px 28px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`
const Input = styled.input`
  ${({ theme }) => theme.typographies.SUB_TEXT};
`
const HelperText = styled.p`
  margin-left: 22px;
  padding: 10px;
  ${({ theme }) => theme.typographies.HELPER_TEXT};
  color: ${({ theme }) => theme.colors.GRAY};
`
export default AuthInput
