import React from 'react'
import styled from 'styled-components'

interface InputBoxProps {
  tag: 'input' | 'div'
  // eslint-disable-next-line react/require-default-props
  title?: string
}
const TitleInput: React.FC<InputBoxProps> = ({ tag, title }) => {
  const MAX_LENGTH = 20
  return (
    <Box>
      {tag === 'div' && title ? <Title>{title}</Title> : <input />}
      {tag === 'div' && title ? (
        <Length>
          ( {title.length} / {MAX_LENGTH} )
        </Length>
      ) : (
        <Length>( 3 / {MAX_LENGTH} )</Length>
      )}
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
const Title = styled.p`
  ${({ theme }) => theme.typographies.SUB_TITLE};
`
const Length = styled.p`
  ${({ theme }) => theme.typographies.DEFAULT};
  color: ${({ theme }) => theme.colors.GRAY};
`
export default TitleInput
