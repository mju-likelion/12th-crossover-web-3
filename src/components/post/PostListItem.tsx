import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { calculateTime } from '../../utils/calculateTime.ts'
import { PostListItemTypes } from '../../types'
import myProfile from '../../assets/profile_mine.svg'
import defaultProfile from '../../assets/profile_default.svg'

type ListItemProps = {
  itemData: PostListItemTypes
}

const PostListItem: React.FC<ListItemProps> = ({ itemData }) => {
  const { title, content, writer, postId, createdAt, isMyPost } = itemData
  const time = calculateTime(createdAt)
  const profileImg = isMyPost ? myProfile : defaultProfile
  const navigate = useNavigate()

  return (
    <ItemContainer onClick={() => navigate(`/${postId}`)}>
      <Profile>
        <img src={profileImg} alt="프로필 이미지" />
      </Profile>
      <ContentBox>
        <NickName>{writer}</NickName>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <TimeStamp>{time}</TimeStamp>
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
  cursor: pointer;
`
const Profile = styled.div``
const ContentBox = styled.div`
  width: 100%;
`
const NickName = styled.p`
  ${({ theme }) => theme.typographies.SUB_TEXT};
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
