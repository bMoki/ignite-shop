import { GetServerSideProps, GetStaticPaths } from 'next';
import Image from 'next/future/image';
import { useState } from 'react';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import Head from 'next/head';
import { useShoppingCart } from 'use-shopping-cart';

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
        description: string;
        price_id: string;
        currency: string,
        price_formatted: string,
    }
}

export default function Product({ product }: ProductProps) {
    const { addItem, cartDetails } = useShoppingCart();
    const cart = Object.values(cartDetails);

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price_formatted}</span>
                    <p>{product.description}</p>
                    <button
                        onClick={() => addItem(product)}
                        disabled={cart.some(e => e.id === product.id)}
                    >
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [],
//         fallback: true,
//     }
// }


export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
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
        },
        //revalidate: 60 * 60 * 1, // 1 hora
    }
}