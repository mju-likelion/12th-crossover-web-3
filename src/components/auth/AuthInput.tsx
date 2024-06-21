import styled from 'styled-components'
import {
  FieldPath,
  FieldValues,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'
import successIcon from '../../assets/success.svg'
import errorIcon from '../../assets/error.svg'
import cancelIcon from '../../assets/cancel.svg'

interface AuthFieldValues<TFieldValues extends FieldValues> {
  name: keyof TFieldValues
  placeholder: string
  value: TFieldValues
  register: UseFormRegister<TFieldValues>
  setValue: UseFormSetValue<TFieldValues>
  errorMsg: string
}
interface InputBoxStyle {
  $isFilled: boolean
  $isError: boolean
}

function AuthInput<TFieldValues extends FieldValues>({
  name,
  placeholder,
  value,
  register,
  setValue,
  errorMsg,
}: AuthFieldValues<TFieldValues>) {
  const handleValueCancel = (name: FieldPath<TFieldValues>) => {
    setValue(name, '' as PathValue<TFieldValues, typeof name>)
  }

  return (
    <InputContainer>
      <InputBox $isFilled={value[name]} $isError={errorMsg !== ''}>
        <Input
          placeholder={placeholder}
          value={value[name]}
          {...register(name as FieldPath<TFieldValues>)}
          $isFilled={value[name]}
          $isError={errorMsg !== ''}
        />
        <Icons>
          {value[name] && (
            <StatusButton src={errorMsg ? errorIcon : successIcon} />
          )}
          <CancelButton
            onClick={() => handleValueCancel(name as FieldPath<TFieldValues>)}
          >
            <img src={cancelIcon} alt="입력 취소 버튼" />
          </CancelButton>
        </Icons>
      </InputBox>
      {(errorMsg || value[name]) && (
        <HelperText $isFilled={value[name]} $isError={errorMsg !== ''}>
          {errorMsg || (value[name] && `유효한 값입니다.`)}
        </HelperText>
      )}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`
const InputBox = styled.div<InputBoxStyle>`
  padding: 30px 28px;
  display: flex;
  align-items: center;
  border: 2px solid
    ${({ theme, $isFilled, $isError }) =>
      $isFilled
        ? $isError
          ? theme.colors.RED
          : theme.colors.GREEN
        : theme.colors.GRAY};
  border-radius: 25px;
`
const Input = styled.input<InputBoxStyle>`
  ${({ theme }) => theme.typographies.SUB_TEXT};
  color: ${({ theme, $isFilled, $isError }) =>
    $isFilled
      ? $isError
        ? theme.colors.RED
        : theme.colors.GREEN
      : theme.colors.GRAY};
`
const Icons = styled.div`
  display: flex;
  gap: 8px;
`
const StatusButton = styled.img``
const CancelButton = styled.button`
  padding-top: 2px;
`
const HelperText = styled.p<InputBoxStyle>`
  margin-left: 22px;
  padding: 10px;
  ${({ theme }) => theme.typographies.HELPER_TEXT};
  color: ${({ theme, $isFilled, $isError }) =>
    $isFilled
      ? $isError
        ? theme.colors.RED
        : theme.colors.GREEN
      : theme.colors.GRAY};
`
export default AuthInput
