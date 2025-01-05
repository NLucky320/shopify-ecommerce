import { useAddItem } from "@common/cart";
export default useAddItem;

export const handler={
    useHook:()=>{
        return (input: any) => {
    return {
      output: JSON.stringify(input) + "_MODIFIED"
    }
  }
    }
}