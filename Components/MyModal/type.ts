export type ConfigModal = {
  classContainer?: string | 'w-[500px]',
  classContent?: string | '',
  classHeader?: string | '',
  content?: React.ReactNode,
  open?: boolean | false,
  showHeader?: boolean | true,
}

export type ModalProps = {
  config: ConfigModal,
  closeModal: () => void,
}

export type ContainerContextProps = {
  config: ConfigModal,
  closeModal: () => void,
  openModal: (param: ConfigModal) => void,
}
