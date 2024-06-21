import React from 'react'
import styled from 'styled-components'

interface TextAreaBoxProps {
  tag: 'textarea' | 'div'
  // eslint-disable-next-line react/require-default-props
  content?: string
}

const ContentTextArea: React.FC<TextAreaBoxProps> = ({ tag, content }) => {
  const MAX_LENGTH = 140
  return (
    <Box>
      {tag === 'div' && content ? <Content>{content}</Content> : <textarea />}
      {tag === 'div' && content ? (
        <Length>
          ( {content.length} / {MAX_LENGTH} )
        </Length>
      ) : (
        <Length>( 3 / {MAX_LENGTH} )</Length>
      )}
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
const Content = styled.p`
  ${({ theme }) => theme.typographies.SUB_TITLE};
`
const Length = styled.p`
  ${({ theme }) => theme.typographies.DEFAULT};
  color: ${({ theme }) => theme.colors.GRAY};
  text-align: end;
`
export default ContentTextArea
