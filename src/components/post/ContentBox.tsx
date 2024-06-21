import React from 'react'
import styled from 'styled-components'

interface InputBoxProps {
  height: string
  content: string
  maxLength: number
}
type BoxProps = {
  $height: string
}
const ContentBox: React.FC<InputBoxProps> = ({
  height,
  content,
  maxLength,
}) => {
  return (
    <Box $height={height}>
      <Content>{content}</Content>
      <Length $height={height}>
        ( {content.length} / {maxLength} )
      </Length>
    </Box>
  )
}

const Box = styled.div<BoxProps>`
  width: 100%;
  height: ${({ $height }) => $height}px;
  margin-bottom: 30px;
  padding: 52px 34px;
  display: flex;
  flex-direction: ${({ $height }) => $height > '300' && 'column'};
  justify-content: space-between;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`
const Content = styled.p`
  ${({ theme }) => theme.typographies.SUB_TITLE};
`
const Length = styled.p<BoxProps>`
  ${({ theme }) => theme.typographies.DEFAULT};
  color: ${({ theme }) => theme.colors.GRAY};
  white-space: nowrap;
  text-align: ${({ $height }) => $height > '300' && 'end'};
`

export default ContentBox
