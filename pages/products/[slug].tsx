import { Layout } from "@components/common";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

//fetch product slug
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "cool-hat" } },
      { params: { slug: "lightweight-jacket" } },
      { params: { slug: "t-shirt" } },
    ],
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{product.slug}</div>;
}

ProductSlug.Layout = Layout;
