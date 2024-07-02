import styled from 'styled-components'
import {
  FieldPath,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

interface CheckBox<TFieldValues extends FieldValues> {
  name: keyof TFieldValues
  value: TFieldValues
  register: UseFormRegister<TFieldValues>
  setValue: UseFormSetValue<TFieldValues>
  text: string
}

function Agree<TFieldValues extends FieldValues>({
  name,
  value,
  register,
  setValue,
  text,
}: CheckBox<TFieldValues>) {
  const { onChange, ...rest } = register(name as FieldPath<TFieldValues>)

  const handleCheckboxChange = () => {
    const newValue = !value[name]
    setValue(name as FieldPath<TFieldValues>, newValue as never, {
      shouldValidate: true,
    })
  }

  return (
    <AgreeBox>
      <TextBox>
        <Title>[필수] 개인정보보호정책</Title>
        <Check>
          <Title>약관 동의</Title>
          <CheckBoxInput
            type="checkbox"
            value={value[name]}
            checked={value[name]}
            onChange={handleCheckboxChange}
            {...rest}
          />
        </Check>
      </TextBox>
      <Content>{text}</Content>
    </AgreeBox>
  )
}

const AgreeBox = styled.div`
  width: 1120px;
`
const TextBox = styled.div`
  margin: 36px 24px 12px;
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  ${({ theme }) => theme.typographies.SUB_TITLE};
  white-space: nowrap;
`
const Check = styled.div`
  display: flex;
`
const CheckBoxInput = styled.input``
const Content = styled.div`
  width: 100%;
  height: 340px;
  padding: 20px 30px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  ${({ theme }) => theme.typographies.HELPER_TEXT};
  line-height: 22px;
  overflow-y: scroll;
  white-space: pre-line;
`
export default Agree
