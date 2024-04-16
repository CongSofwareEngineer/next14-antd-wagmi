import React from 'react'
import Modal from '@mui/material/Modal'
import { ModalProps } from './type'
import Box from '@mui/material/Box'
const ModalConfig = ({ config, closeModal }: ModalProps) => {
  return (
    <Modal  open={config.open || false} onClose={closeModal} style={{ width: 500 }}>
      <Box>
        {config.showHeader && (
          <div className={`w-full ${config.classHeader}`}>Header</div>
        )}
        {config.content && (
          <div className={`w-[500px]  ${config.classContent}`}>{config.content}</div>
        )}
      </Box>
    </Modal>
  )
}

export default ModalConfig
