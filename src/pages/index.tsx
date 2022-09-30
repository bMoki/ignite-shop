import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';
import Head from 'next/head';

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import Link from 'next/link';
import { Handbag } from "phosphor-react";
import { useShoppingCart } from 'use-shopping-cart';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    price_id: string;
    currency: string,
    price_formatted: string,
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  const { addItem, cartDetails } = useShoppingCart();
  const cart = Object.values(cartDetails);


  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (

            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price_formatted}</span>
                </div>
                <button onClick={() => addItem(product)} disabled={cart.some(e => e.id === product.id)}><Handbag size={24} weight="bold" /></button>
              </footer>
            </Product>

          )
        })}
      </HomeContainer>





    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });



  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      price_formatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      description: product.description,
      price_id: price.id,
      currency: 'BRL',
    }
  })

  return {
    props: {
      products
    },
  }
}