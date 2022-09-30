import Image from 'next/future/image';
import { HeaderContainer } from '../../styles/header';
import logoImg from '../../assets/logo.svg';
import { ShoppingBagModal } from "../ShoppingBagModal";
import Link from 'next/link';

export function Header() {
    return (
        <HeaderContainer>
            <Link href={"/"}>
                <Image src={logoImg} alt="" />
            </Link>
            <ShoppingBagModal />

        </HeaderContainer>
    )
}