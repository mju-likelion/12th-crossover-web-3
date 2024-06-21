import styled from 'styled-components'
import TitleInput from '../components/post/TitleInput.tsx'
import ContentTextArea from '../components/post/ContentTextArea.tsx'

const Detail = () => {
  return (
    <PageContainer>
      <TitleInput tag="div" title="title" />
      <ContentTextArea tag="div" content="content" />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 784px;
  margin: 210px auto 0;
  padding: 20px 0;
`
export default Detail
