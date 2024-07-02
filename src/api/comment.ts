import { Axios } from './Axios.ts'

export const getComments = async (postId: string) => {
  try {
    const response = await Axios.get(`/posts/${postId}/comments?page=0`)
    return response?.data?.data?.content
  } catch (e) {
    console.log(e)
    return []
  }
}

export const postComment = async (postId: string, content: string) => {
  try {
    const response = await Axios.post(`/posts/${postId}/comments`, { content })
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const deleteComment = async (postId: string) => {
  try {
    const response = await Axios.delete(`/posts/comments/${postId}`)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}
