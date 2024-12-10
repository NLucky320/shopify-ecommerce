import { Layout } from "@components/common";
import { ProductView } from "@components/product";
import { Container } from "@components/ui";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/product";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

//fetch product slug
export const getStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);

  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct({config,variables:{slug:params?.slug}});
  return {
    props: {
      product,
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(JSON.stringify(product, null, 2))
  return (
     <>
        { product && <ProductView product={product} />}
    </>
  );
}

ProductSlug.Layout = Layout;
