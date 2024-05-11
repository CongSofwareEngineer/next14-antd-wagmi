import { Button, ButtonProps } from 'antd'

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      {...props}>
      {children}
    </Button>
  )
}

export default PrimaryButton
