import { Button, ButtonProps } from 'antd'
import styled from 'styled-components'
const ButtonCustom = styled(Button)`
  background: linear-gradient(to right top, #3b82f6, rgb(234, 179, 8)) !important;
  :active :hover {
    opacity: 0.8 !important;
    background: linear-gradient(to right top, #3b82f6, rgb(234, 179, 8)) !important;
  }
`
const SecondButton = ({ children, ...props }: ButtonProps) => {
  return <ButtonCustom {...props}>{children}</ButtonCustom>
}

export default SecondButton
