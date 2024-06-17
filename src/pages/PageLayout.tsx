import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  )
}

const PageContainer = styled.div``
export default PageLayout
