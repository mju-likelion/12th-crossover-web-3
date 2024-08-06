import { PostTypes } from '../../types'

export const postDetail: PostTypes = {
  title: '안녕하세요',
  content: '날씨가 엄청 덥네요',
  nickname: '아기사자',
  comments: [
    {
      content: '그러게요 장난 아니에요',
      author: '중딩사자',
      createdAt: '2024-06-29T15:36:49.992582',
      isMyComment: false,
    },
    {
      content: '더위조심하세요',
      author: '아기사자',
      createdAt: '2024-06-29T15:38:50.992582',
      isMyComment: true,
    },
    {
      content: '네 ~~ 님두요 건강 건강 건강!!',
      author: '중딩사자',
      createdAt: '2024-06-29T15:42:50.992582',
      isMyComment: false,
    },
  ],
  createdAt: '2024-06-21T15:14:04.511961',
  myPost: true,
}
