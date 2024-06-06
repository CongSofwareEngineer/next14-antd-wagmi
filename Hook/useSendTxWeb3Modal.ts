import { useCallback, useEffect, useRef } from 'react'
import { ContractFunctionName } from 'viem'
import { Config, useSendTransaction, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { SendTransactionVariables, WriteContractVariables } from 'wagmi/query'

export type OptionsMoreType = {
  onSuccess?: (data: any, variables: any, context: any) => void;
  onError?: (error: any, variables: any, context: any | undefined) => void;
  onSettled?: (data: any | undefined, error: any | null, variables: any, context: any | undefined) => void;
}
export type OptionCallbackType = {
  callBackDone?: () => Promise<void> | void
  callBackBefore?: () => Promise<void> | void
  callBackReject?: () => Promise<void> | void,
}

type SendTransactionWeb3ModalType = {
  variables: WriteContractVariables<[], ContractFunctionName<[], 'nonpayable' | 'payable'>, [], Config, number>,
  options?: OptionsMoreType
} & OptionCallbackType

type SendTokenNativeWeb3ModalType = { 
  variables: SendTransactionVariables<Config, number>,
  options?: OptionsMoreType
} & OptionCallbackType

const useSendTxWeb3Modal = () => {
  const { writeContract, data: hashWriteContract, isError: isErrorHashWriteContract, error: errorHashWriteContract } = useWriteContract()
  const { isPending: isPendingWriteContract, isError: isErrorWriteContract, isSuccess: isSuccessWriteContract, error: errorWriteContract } = useWaitForTransactionReceipt({ hash: hashWriteContract })
  //send token native
  const { sendTransaction, data: hashTokenNative, isError: isErrorHashTokenNative, error: errorHashTokenNative } = useSendTransaction()
  const { isPending: isPendingTokenNative, isError: isErrorTokenNative, isSuccess: isSuccessTokenNative, error: errorTokenNative } = useWaitForTransactionReceipt({ hash: hashTokenNative })

  const callBackDoneRef = useRef<any>(() => { })
  const callBackBeforeRef = useRef<any>(() => { })
  const callBackRejectRef = useRef<any>(() => { })

  useEffect(() => {
    if (hashWriteContract && hashTokenNative) {
      callBackBeforeRef.current()
    }
  }, [hashWriteContract, hashTokenNative])

  //tracking write contract
  useEffect(() => {
    if (isErrorHashWriteContract) {
      callBackRejectRef.current(errorHashWriteContract.message)
    }
    if (isErrorWriteContract) {
      callBackRejectRef.current(errorWriteContract.message)
    }
    if (isPendingWriteContract) {
      callBackBeforeRef.current()
    }
    if (isSuccessWriteContract) {
      callBackDoneRef.current()
    }

  }, [isErrorWriteContract, errorHashWriteContract, isErrorHashWriteContract, isPendingWriteContract, isSuccessWriteContract])

  //tracking send token native
  useEffect(() => {
    if (isErrorHashTokenNative) {
      callBackRejectRef.current(errorHashTokenNative.message)
    }
    if (isErrorTokenNative) {
      callBackRejectRef.current(errorTokenNative.message)
    }
    if (isPendingTokenNative) {
      callBackBeforeRef.current()
    }
    if (isSuccessTokenNative) {
      callBackDoneRef.current()
    }

  }, [isErrorTokenNative, errorHashTokenNative, isErrorHashTokenNative, isPendingTokenNative, isSuccessWriteContract])

  const addCallBackOption = useCallback((config: any) => {
    callBackBeforeRef.current = config.callBackBefore
    callBackDoneRef.current = config.callBackDone
    callBackRejectRef.current = config.callBackReject
  }, [])


  const sendTxWeb3Modal = useCallback((config: SendTransactionWeb3ModalType) => {
    addCallBackOption(config)
    writeContract(config.variables, config.options)
  }, [writeContract])

  const sendTokenNativeWeb3Modal = useCallback((config: SendTokenNativeWeb3ModalType) => {
    addCallBackOption(config)
    sendTransaction(config.variables, config.options)
  }, [sendTransaction])



  return { sendTxWeb3Modal, sendTokenNativeWeb3Modal }
}

export default useSendTxWeb3Modal