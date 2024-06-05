import { useCallback, useEffect, useRef } from 'react'
import { ContractFunctionName } from 'viem'
import { Config, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { WriteContractVariables } from 'wagmi/query'

type SendTransactionWeb3ModalType = {
  callBackDone?: () => Promise<void> | void
  callBackBefore?: () => Promise<void> | void
  callBackReject?: () => Promise<void> | void,
  variables: WriteContractVariables<[], ContractFunctionName<[], 'nonpayable' | 'payable'>, [], Config, number>,
  options?: object
}

const useSendTxWeb3Modal = () => {
  const { writeContract, data: hash, isError: isErrorHash, error: errorHash } = useWriteContract()
  const { isPending, isError, isSuccess, error } = useWaitForTransactionReceipt({ hash: hash })

  const callBackDoneRef = useRef<any>(() => { })
  const callBackBeforeRef = useRef<any>(() => { })
  const callBackRejectRef = useRef<any>(() => { })

  useEffect(() => {
    if (hash) {
      callBackBeforeRef.current()
    }
  }, [hash])

  useEffect(() => {
    if (isErrorHash) {
      callBackRejectRef.current(errorHash.message)
    }
    if (isError) {
      callBackRejectRef.current(error.message)
    }
    if (isPending) {
      callBackBeforeRef.current()
    }
    if (isSuccess) {
      callBackDoneRef.current()
    }

  }, [isError, errorHash, isErrorHash, isPending, isSuccess])

  const sendTransactionWeb3Modal = useCallback((config: SendTransactionWeb3ModalType) => {
    callBackBeforeRef.current = config.callBackBefore
    callBackDoneRef.current = config.callBackDone
    callBackRejectRef.current = config.callBackReject
    writeContract(config.variables, config.options)
  }, [writeContract])

  return { sendTransactionWeb3Modal }
}

export default useSendTxWeb3Modal