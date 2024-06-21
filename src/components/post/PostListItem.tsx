import styled from 'styled-components'
import myProfile from '../../assets/profile_mine.svg'
import defaultProfile from '../../assets/profile_default.svg'

type ListItemProps = {
  isMine: boolean
}

const PostListItem: React.FC<ListItemProps> = ({ isMine }) => {
  const profileImg = isMine ? myProfile : defaultProfile

  return (
    <ItemContainer>
      <Profile>
        <img src={profileImg} alt="프로필 이미지" />
      </Profile>
      <ContentBox>
        <Title>제목</Title>
        <Content>내용</Content>
        <TimeStamp>18:30</TimeStamp>
      </ContentBox>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  width: 100%;
  height: 344px;
  padding: 32px 42px;
  display: flex;
  gap: 40px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`
const Profile = styled.div``
const ContentBox = styled.div`
  width: 100%;
`
const Title = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
`
const Content = styled.p`
  height: 200px;
  padding: 20px 24px;
  border: 1px solid ${({ theme }) => theme.colors.BLUE_1};
  border-radius: 25px;
  ${({ theme }) => theme.typographies.SUB_TEXT};
`
const TimeStamp = styled.p`
  margin: 10px 0 0 auto;
  ${({ theme }) => theme.typographies.SUB_TEXT};
  color: ${({ theme }) => theme.colors.GRAY};
  text-align: end;
`

export default PostListItem
