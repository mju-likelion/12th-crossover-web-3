import styled from 'styled-components'
import { useState } from 'react'
import TitleInput from '../components/post/TitleInput.tsx'
import ContentTextArea from '../components/post/ContentTextArea.tsx'
import Button from '../components/post/Button.tsx'

const Write = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (formValues.title && formValues.content) {
      console.log(formValues)
    }
  }

  return (
    <PageContainer onSubmit={onSubmit}>
      <TitleInput
        value={formValues.title}
        setValue={value => setFormValues({ ...formValues, title: value })}
      />
      <ContentTextArea
        value={formValues.content}
        setValue={value => setFormValues({ ...formValues, content: value })}
      />
      <CommentBox>
        <Message>※ 작성된 게시글은 수정이 불가합니다.</Message>
        <WriteButton color="BLUE_1">작성하기</WriteButton>
      </CommentBox>
    </PageContainer>
  )
}
const PageContainer = styled.form`
  width: 784px;
  margin: 170px auto 0;
`
const CommentBox = styled.div`
  margin-top: 10px;
  padding: 30px;
`
const Message = styled.p`
  ${({ theme }) => theme.typographies.DEFAULT}
  color: ${({ theme }) => theme.colors.GRAY}
`
const WriteButton = styled(Button)`
  margin-left: auto;
  display: block;
`
export default Write
