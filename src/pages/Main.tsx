import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../api/post.ts'
import Button from '../components/post/Button.tsx'
import PostListItem from '../components/post/PostListItem.tsx'
import { PostListItemTypes } from '../types'

const Main = () => {
  const [postList, setPostList] = useState<PostListItemTypes[]>([])
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/write')
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPosts()
      setPostList(response)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <PageContainer>
      <WriteButton onClick={onClick} color="BLUE_1">
        작성하기
      </WriteButton>
      <PostListContainer>
        {postList?.map(item => (
          <PostListItem key={item.postId} itemData={item} />
        ))}
      </PostListContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 784px;
  margin: 140px auto 0;
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
