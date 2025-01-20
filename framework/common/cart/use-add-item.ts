
import { useHook, useMutationHook } from "../utils/use-hook"

const useAddItem=()=>{
const hook=useHook((hooks)=>{
    return hooks.cart.useAddItem
})
  return useMutationHook({...hook})
}
export default useAddItem