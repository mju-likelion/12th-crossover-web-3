import { Axios } from './Axios.ts'
import { Post } from '../types'

export const getPosts = async () => {
  try {
    const response = await Axios.get('/posts?page=0')
    return response?.data?.data?.content
  } catch (e) {
    // console.log(e?.response?.data?.detail)
    return []
  }
}
export const getPostDetail = async (postId: string) => {
  try {
    const response = await Axios.get(`/posts/${postId}`)
    return response?.data?.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const postPost = async (data: Post) => {
  try {
    const response = await Axios.post('/posts', data)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const deletePost = async (postId: string) => {
  try {
    const response = await Axios.delete(`/posts/${postId}`)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}
