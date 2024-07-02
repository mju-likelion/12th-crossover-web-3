import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { deleteComment } from '../../api/comment.ts'
import myProfile from '../../assets/profile_mine.svg'
import defaultProfile from '../../assets/profile_default.svg'
import more from '../../assets/more.svg'

interface CommentProps {
  isMyPost: boolean
  name: string
  content: string
  timeStamp: string
}
const Comment: React.FC<CommentProps> = ({
  isMyPost,
  name,
  content,
  timeStamp,
}) => {
  const { postId } = useParams()
  const profileImg = isMyPost ? myProfile : defaultProfile

  const handleDelete = async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('댓글을 삭제할까요?')) {
        const response = await deleteComment(postId || '')
        console.log(response)
        // TODO 정상적으로 삭제되면 alert, fetching
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <UserInfo>
        <ProfileImg src={profileImg} alt="프로필 이미지" />
        <Name>{name}</Name>
        {isMyPost && (
          <MoreButton onClick={handleDelete}>
            <img src={more} alt="더보기 버튼" />
          </MoreButton>
        )}
      </UserInfo>
      <ContentBox>
        <Content>{content}</Content>
        <TimeStamp>{timeStamp}</TimeStamp>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 16px;
`
const UserInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.typographies.DEFAULT}
`
const ContentBox = styled.div`
  margin-left: 10px;
`
const ProfileImg = styled.img`
  width: 36px;
`
const Name = styled.p``
const MoreButton = styled.button`
  margin-left: auto;
`
const Content = styled.p`
  margin-bottom: 4px;
  ${({ theme }) => theme.typographies.DEFAULT}
`
const TimeStamp = styled.p`
  color: ${({ theme }) => theme.colors.GRAY};
`

export default Comment
