import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Details, FlexContentCenter, ImageContainer, Item, ItemDetails, Overlay, ShoppingList, Title, TotalText } from "../../styles/shoppingBagModal";
import { Handbag, X } from 'phosphor-react';
import Image from "next/future/image";
import { useShoppingCart } from 'use-shopping-cart';
import { useTransition, animated } from "react-spring";
import { useState } from 'react'
import { HandbagButton } from "../../styles/header";
import axios from 'axios';


export function ShoppingBagModal() {
    const { cartDetails, cartCount, totalPrice, removeItem } = useShoppingCart();
    const cart = Object.values(cartDetails);
    const [open, setOpen] = useState(false);
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyProduct() {
        const line_items = cart.map(product => {
            return {
                price: product.price_id,
                quantity: 1
            }
        })

        console.log(line_items);
        try {
            setIsCreatingCheckoutSession(true);
            const response = await axios.post('/api/checkout', {
                line_items,
            })
            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            //Conectar com uma ferramentea de observabilidade (Datadog / Sentry)
            console.log(err);
            setIsCreatingCheckoutSession(false);
            alert('Falha ao redirecionar ao checkout!')
        }
    }


    function handleRemoveItem(id: string) {
        removeItem(id);
    }

    const transitions = useTransition(open, {
        from: { opacity: 0, right: -110 },
        enter: { opacity: 1, right: 0 },
        leave: { opacity: 0, right: -110 },
        config: { bounce: 0, duration: 200 }
    });

    return (
        <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <HandbagButton>
                        <Handbag weight="bold" size={24} />
                        {cartCount ? <span>{cartCount}</span> : ''}
                    </HandbagButton>
                </Dialog.Trigger>

                {transitions((styles, item) => item ? (
                    <Dialog.Portal forceMount>
                        <Overlay forceMount asChild>
                            <animated.div
                                style={{
                                    opacity: styles.opacity,
                                }}
                            />
                        </Overlay>

                        <Content forceMount asChild>
                            <animated.div style={styles}>
                                <Title>Sacola de compras</Title>
                                <CloseButton><X size={24} /> </CloseButton>
                                <FlexContentCenter>
                                    <ShoppingList >
                                        {cart.map(item => (
                                            <Item key={item.id}>
                                                <ImageContainer>
                                                    <Image src={item.imageUrl} width={94} height={94} alt="" />
                                                </ImageContainer>

                                                <ItemDetails>
                                                    <h3>{item.name}</h3>
                                                    <span>{item.price_formatted}</span>
                                                    <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                                                </ItemDetails>
                                            </Item>
                                        ))}


                                    </ShoppingList>

                                    <Details>
                                        <div>
                                            <span>Quantidade</span>
                                            <span>{cartCount} {cartCount > 1 ? 'itens' : 'item'}</span>
                                        </div>
                                        <div>
                                            <strong>Valor total</strong>
                                            <TotalText>{Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL',
                                            }).format(totalPrice / 100)}</TotalText>
                                        </div>
                                        <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Finalizar compra</button>
                                    </Details>
                                </FlexContentCenter>
                            </animated.div>
                        </Content>
                    </Dialog.Portal>

                ) : null
                )}

            </Dialog.Root>
        </>
    )
}