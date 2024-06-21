import styled from 'styled-components'

export interface SetValueType {
  value: string
  setValue: (value: string) => void
}
const TitleInput: React.FC<SetValueType> = ({ value, setValue }) => {
  const MAX_LENGTH = 20
  return (
    <Box>
      <Input maxLength={MAX_LENGTH} onChange={e => setValue(e.target.value)} />
      <Length>
        ( {value.length} / {MAX_LENGTH} )
      </Length>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 52px 34px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`
const Input = styled.input`
  ${({ theme }) => theme.typographies.SUB_TITLE};
`
const Length = styled.p`
  ${({ theme }) => theme.typographies.DEFAULT};
  color: ${({ theme }) => theme.colors.GRAY};
  white-space: nowrap;
`
export default TitleInput
