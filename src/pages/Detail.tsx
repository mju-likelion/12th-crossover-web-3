import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deletePost, getPostDetail } from '../api/post.ts'
import { calculateTime } from '../utils/calculateTime.ts'
import { getComments } from '../api/comment.ts'
import Button from '../components/post/Button.tsx'
import ContentBox from '../components/post/ContentBox.tsx'
import CommentInput from '../components/comment/CommentInput.tsx'
import Comment from '../components/comment/Comment.tsx'
import { CommentTypes, PostTypes } from '../types'

const Detail = () => {
  const { postId } = useParams()
  const [postData, setPostData] = useState<PostTypes>()
  const [commentsData, setCommentsData] = useState<CommentTypes[]>([])
  const { nickname, title, content, myPost } = postData || {}

  const handlePostDelete = async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('게시글을 삭제할까요?')) {
        const response = await deletePost(postId || '')
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await getPostDetail(postId || '')
      setPostData(response)
    }
    try {
      fetchPostData()
    } catch (error) {
      console.log(error)
    }
  }, [postId])

  useEffect(() => {
    const fetchCommentData = async () => {
      const response = await getComments(postId || '')
      setCommentsData(response)
    }
    try {
      fetchCommentData()
    } catch (error) {
      console.log(error)
    }
  }, [postId])

  return (
    <PageContainer>
      {postData && (
        <>
          <Nickname>{nickname}</Nickname>
          <ContentBox height="134" content={title || ''} maxLength={20} />
          <ContentBox height="750" content={content || ''} maxLength={140} />
          <CommentWrapper>
            <CommentInput postId={postId || ''} />
            <CommentList>
              {commentsData?.map((comment: CommentTypes) => (
                <Comment
                  key={comment.createdAt}
                  isMyPost={comment.isMyComment}
                  name={comment.author}
                  content={comment.content}
                  timeStamp={calculateTime(comment.createdAt)}
                />
              ))}
            </CommentList>
          </CommentWrapper>
          {myPost && (
            <DeleteBox>
              <Message>※ 작성된 게시글은 수정이 불가합니다.</Message>
              <DeleteButton onClick={handlePostDelete} color="GRAY">
                삭제하기
              </DeleteButton>
            </DeleteBox>
          )}
        </>
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
