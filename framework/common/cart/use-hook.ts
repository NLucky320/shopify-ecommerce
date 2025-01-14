import { useApiProvider } from "@common"
import { ApiHooks } from "@common/types/api"



export const useHook=(fn:(apiHooks: ApiHooks))=>{
const {hooks}=useApiProvider()
return fn(hooks)
}