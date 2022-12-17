import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImage from '../../assets/logo-dtmoney.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />
        <NewTransactionButton>Nova transacao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
