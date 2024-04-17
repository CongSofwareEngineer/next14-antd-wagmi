import React from 'react'
import { ModalProps } from './type'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'

const ModalConfig = ({ config, closeModal }: ModalProps) => {
  return (
    <Modal
      hideCloseButton={config?.overClickClose || false}
      isKeyboardDismissDisabled={!config?.overClickClose}
      isDismissable={!config?.overClickClose}
      isOpen={config?.open || false}
      placement={config?.positionModal || 'auto'}
      onClose={closeModal}>
      <ModalContent className={config?.classContainer}>
        {() => (
          <>
            {config?.title && (
              <ModalHeader className={`flex flex-col gap-1 ${config?.classHeader}`}>
                {config?.title}
              </ModalHeader>
            )}

            <ModalBody className={config?.classContent}>{config?.content}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalConfig
