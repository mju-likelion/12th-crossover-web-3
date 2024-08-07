export interface PostListItemTypes {
  title: string
  content: string
  writer: string
  postId: string
  createdAt: string
  isMyPost: boolean
}

export interface PostTypes {
  title: string
  content: string
  nickname: string
  comments: CommentTypes[]
  createdAt: string
  myPost: boolean
}

export interface CommentTypes {
  content: string
  author: string
  createdAt: string
  isMyComment: boolean
}

export interface Post {
  title: string
  content: string
}
