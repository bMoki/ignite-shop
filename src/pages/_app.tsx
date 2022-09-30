import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app";
import { CartProvider } from 'use-shopping-cart';
import { Header } from "../components/Header";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <CartProvider
        cartMode="checkout-session"
        currency="BRL"
        stripe=""
      >
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>

  )
}
