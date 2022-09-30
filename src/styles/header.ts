import { styled } from "."

export const HeaderContainer = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
})

export const HandbagButton = styled('button', {
    border: 0,
    padding: '0.75rem',
    background: '$gray800',
    color: '$gray400',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',


    span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.75rem',
        height: '1.75rem',
        background: '$green500',
        borderRadius: 99,
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: '$white',
        position: 'absolute',
        top: -10,
        right: -10,
        border: 'solid 3px $gray900'
    }


})