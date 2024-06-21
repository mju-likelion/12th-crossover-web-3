import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.tsx'

const PageLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  )
}

const PageContainer = styled.div``
export default PageLayout
