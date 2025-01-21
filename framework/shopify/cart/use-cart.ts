
import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
  fetchOptions: {
    query: ""
  },
  fetcher() {
    console.log("i am not called :(")
    return {
      data: "cart ready!!!"
    }
  },
  useHook: ({useData}: any) => {
    const data = useData()
    return {
      data
    }
  }
}