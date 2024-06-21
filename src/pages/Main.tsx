import styled from 'styled-components'
import Button from '../components/post/Button.tsx'
import PostListItem from '../components/post/PostListItem.tsx'

const Main = () => {
  return (
    <PageContainer>
      <WriteButton color="BLUE_1">작성하기</WriteButton>
      <PostListContainer>
        <PostListItem isMine={false} />
        <PostListItem isMine />
        <PostListItem isMine />
        <PostListItem isMine />
        <PostListItem isMine={false} />
      </PostListContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 784px;
  margin: 0 auto;
  padding: 20px 0;
`
const WriteButton = styled(Button)`
  margin: 0 0 20px auto;
  display: block;
`
const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`

export default Main
