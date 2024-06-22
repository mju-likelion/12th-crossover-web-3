import styled from 'styled-components'
import Button from '../components/post/Button.tsx'
import ContentBox from '../components/post/ContentBox.tsx'
import CommentInput from '../components/comment/CommentInput.tsx'
import Comment from '../components/comment/Comment.tsx'
import { postDetail } from '../assets/data/postDetail.ts'

const Detail = () => {
  const { title, content, nickname, isMyPost } = postDetail
  return (
    <PageContainer>
      <Nickname>{nickname}</Nickname>
      <ContentBox height="134" content={title} maxLength={20} />
      <ContentBox height="750" content={content} maxLength={140} />
      <CommentWrapper>
        <CommentInput />
        <CommentList>
          {/* 임시 value 지정 */}
          <Comment
            isMyPost
            name="댓글 작성자 이름"
            content="댓글 내용"
            timeStamp="16:28"
          />
          <Comment
            isMyPost={false}
            name="댓글 작성자 이름"
            content="댓글 내용"
            timeStamp="16:28"
          />
          <Comment
            isMyPost
            name="댓글 작성자 이름"
            content="댓글 내용"
            timeStamp="16:28"
          />
          <Comment
            isMyPost={false}
            name="댓글 작성자 이름"
            content="댓글 내용"
            timeStamp="16:28"
          />
        </CommentList>
      </CommentWrapper>
      {isMyPost && (
        <DeleteBox>
          <Message>※ 작성된 게시글은 수정이 불가합니다.</Message>
          <DeleteButton color="GRAY">삭제하기</DeleteButton>
        </DeleteBox>
      )}
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 784px;
  margin: 170px auto 0;
`
const Nickname = styled.p`
  padding: 20px;
  ${({ theme }) => theme.typographies.HEADING}
`
const CommentWrapper = styled.div``
const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const DeleteBox = styled.div`
  margin-top: 10px;
  padding: 30px;
`
const Message = styled.p`
  ${({ theme }) => theme.typographies.DEFAULT}
  color: ${({ theme }) => theme.colors.GRAY}
`
const DeleteButton = styled(Button)`
  margin-left: auto;
  display: block;
`
export default Detail
