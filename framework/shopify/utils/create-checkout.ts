import { ApiFetcher } from "@common/types/api"
import { checkoutCreateMutation } from "./mutation"
import { Checkout, CheckoutCreatePayload, Maybe } from "@framework/schema"

const createCheckout = async (
  fetch: ApiFetcher<{checkoutCreate: CheckoutCreatePayload}>
): Promise<Maybe<Checkout | undefined>> => {
  const { data } = await fetch({
    query: checkoutCreateMutation
  })

  const { checkout } = data.checkoutCreate
  const checkoutId = checkout?.id



  return checkout
}

export default createCheckout