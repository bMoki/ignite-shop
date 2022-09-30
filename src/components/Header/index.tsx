import Image from 'next/future/image';
import { HeaderContainer, HandbagButton } from '../../styles/header';
import logoImg from '../../assets/logo.svg';
import * as Dialog from "@radix-ui/react-dialog";
import { ShoppingBagModal } from "../ShoppingBagModal";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from 'use-shopping-cart';
import Link from 'next/link';
import { useState } from 'react'

export function Header() {
    const { cartCount } = useShoppingCart();
    const [open, setOpen] = useState(false);
    return (
        <HeaderContainer>
            <Link href={"/"}>
                <Image src={logoImg} alt="" />
            </Link>
            {/* <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <HandbagButton>
                        <Handbag weight="bold" size={24} />
                        {cartCount ? <span>{cartCount}</span> : ''}
                    </HandbagButton>
                </Dialog.Trigger>
                <ShoppingBagModal />
            </Dialog.Root> */}
            <ShoppingBagModal />

        </HeaderContainer>
    )
}