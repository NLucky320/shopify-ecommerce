import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const shopifyResponse = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!, {
    method: "POST",
    credentials: "include",  // ✅ Needed for Shopify session persistence
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
    body: JSON.stringify(req.body),
  });

  const data = await shopifyResponse.json();
  res.status(shopifyResponse.status).json(data);
}
