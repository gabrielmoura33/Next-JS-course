import SEO from '@/components/SEO';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[]
}

export default function Home({ recommendedProducts }: HomeProps)  {
 
  return (
    <div>
      <SEO title="DevCommerce, your best e-ecommerce!" description="Best ecomerce for devs" shouldExcludeTitleSuffix  />
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return(
              <li key={recommendedProduct.id}>
                { recommendedProduct.title }
              </li>
            )
          })}
        </ul>
      </section>

    </div>
    
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const response = await fetch(`${process.env.API_URL}/recommended`);

    const recommendedProducts = await response.json();

    return  {
      props: {
        recommendedProducts
      }
    }
}