import styled from 'styled-components'

const text =
  '주식회사 멋쟁이사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보보호 규정을 준수하여 「멋쟁이사자처럼 대학 11기」 참가자의 개인정보 및 권익을 보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.\n\n가. 개인 정보의 수집· 이용에 관한 사항\n\n▣ 개인 정보의 수집· 이용 목적\n개인 정보는 1차적으로 본 프로그램 참가신청, 참가신청에 따른 본인확인, 개인식별, 프로그램 진행, 프로그램 관련 안내/고지사항 등의 전달, 문의사항 또는 불만사항 등의 확인 및 처리, 분쟁 조정을 위한 기록 보존 등을 위해 사용됩니다. 이후 멋쟁이사자처럼의 프로그램 및 브랜드 홍보를 위한 마케팅에 활용될 수 있습니다.\n지원 프로세스 관리를 위한 개인정보 열람을 위해, 본 동아리 지원 의사 확인, 지원관리에 따른 본인 식별·인증, 지원자 자격 유지·관리, 고충처리(CS) 목적으로 개인정보를 처리합니다.\n\n민원사무 처리를 위해 민원인의 신원 확인, 민원사항 확인, 처리결과 통보 목적으로 개인정보를 처리합니다.\n서비스 제공을 위해 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증을 목적으로 개인정보를 처리합니다.\n\n▣ 수집하는 개인 정보의 항목'

const Agree = () => {
  return (
    <AgreeBox>
      <TextBox>
        <Title>[필수] 개인정보보호정책</Title>
        <Check>
          <Title>약관 동의</Title>
          <CheckBox type="checkbox" />
        </Check>
      </TextBox>
      <Content>{text}</Content>
    </AgreeBox>
  )
}

const AgreeBox = styled.div`
  width: 1120px;
`
const TextBox = styled.div`
  margin: 36px 24px 12px;
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  ${({ theme }) => theme.typographies.SUB_TITLE};
  white-space: nowrap;
`
const Check = styled.div`
  display: flex;
`
const CheckBox = styled.input``
const Content = styled.div`
  width: 100%;
  height: 340px;
  padding: 20px 30px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  ${({ theme }) => theme.typographies.HELPER_TEXT};
  line-height: 22px;
  overflow-y: scroll;
  white-space: pre-line;
`
export default Agree
