import styled from 'styled-components'
import send from '../../assets/send.svg'

interface InputProps {
  placeHolder: string
}

const CommentInput = () => {
  return (
    <Container>
      <Input placeHolder="댓글" />
      <Button>
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
