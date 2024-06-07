 import { useAppSelector } from '@/Redux/store'
import { useCallback } from 'react'
 
const useLanguage = () => {
  const {Language}=useAppSelector(state=>state.app)

 const translate= useCallback((key:string) => {
      
    },
    [],
  )
  
  
  return {

  }
}

export default useLanguage