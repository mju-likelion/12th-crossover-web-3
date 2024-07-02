import styled from 'styled-components'
import { useState } from 'react'
import { postComment } from '../../api/comment.ts'
import send from '../../assets/send.svg'

interface InputProps {
  placeHolder: string
}
interface CommentProps {
  postId: string
}

const CommentInput: React.FC<CommentProps> = ({ postId }) => {
  const [comment, setComment] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const onClick = async () => {
    if (comment !== '') {
      await postComment(postId, comment)
      setComment('')
    }
  }

  return (
    <Container>
      <Input
        placeHolder="댓글"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      <Button onClick={onClick}>
        <img src={send} alt="전송 아이콘" />
      </Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 50px;
  display: flex;
  gap: 10px;
`
const Input = styled.input<InputProps>`
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 16px;
  ${({ theme }) => theme.typographies.DEFAULT}
`
const Button = styled.button`
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BLUE_1};
`
export default CommentInput
