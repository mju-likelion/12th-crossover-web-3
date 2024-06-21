import styled from 'styled-components'
import { SetValueType } from './TitleInput.tsx'

const ContentTextArea: React.FC<SetValueType> = ({ value, setValue }) => {
  const MAX_LENGTH = 140
  return (
    <Box>
      <Textarea
        maxLength={MAX_LENGTH}
        onChange={e => setValue(e.target.value)}
      />
      <Length>
        ( {value.length} / {MAX_LENGTH} )
      </Length>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  height: 660px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`
const Textarea = styled.textarea`
  ${({ theme }) => theme.typographies.DEFAULT};
`
const Length = styled.p`
  ${({ theme }) => theme.typographies.DEFAULT};
  color: ${({ theme }) => theme.colors.GRAY};
  text-align: end;
`
export default ContentTextArea
