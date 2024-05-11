import { ModalContext } from '@/Components/MyModal'
import { ConfigModal } from '@/Components/MyModal/type'
import { useContext } from 'react'

const useModal = () => {
  const { closeModal, openModal: open } = useContext(ModalContext)

  const openModal = (config: ConfigModal) => {
    open({
      ...config,
      showBtnClose: config.showBtnClose === false ? false : config.overClickClose,
      open: true
    })
  }

  return {
    openModal,
    closeModal
  }
}

export default useModal
