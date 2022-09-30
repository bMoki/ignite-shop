import * as Dialog from "@radix-ui/react-dialog";
import { styled } from ".";


export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    // width: '100vw',
    //height: '100vh',
    inset: 0,

    '&:[data-state="open"]': {
        animation: "ease-in"
    }
})

export const Content = styled(Dialog.Content, {
    minWidth: 480,
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    background: '$gray800',
    height: '100%',


    position: 'fixed',
    right: '0',
    top: '0',


})

export const CloseButton = styled(Dialog.Close, {
    position: 'absolute',
    background: 'transparent',
    border: 0,
    top: '1.5rem',
    right: '1.5rem',
    lineHeight: 0,
    cursor: 'pointer',
    color: "$gray400",
})

export const Title = styled(Dialog.Title, {
    fontSize: '$large',
    color: '$gray100',
})

export const ShoppingList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5rem',
    maxHeight: '60vh',
    overflow: "auto",
    '&::-webkit-scrollbar': {
        visibility: "hidden",
    },


    '&:hover': {
        '&::-webkit-scrollbar': {
            width: '3px',
        },

        /* Handle */
        '&::-webkit-scrollbar-thumb': {
            background: '$gray900',
            borderRadius: '10px',
        },
    }



})

export const Item = styled('div', {
    display: 'flex',
    marginTop: '1.5rem',
    gap: '1.25rem',
})

export const ItemDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    button: {
        border: 0,
        background: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            color: '$green300'
        }
    },

    h3: {
        fontSize: '$md',
        fontWeight: 'normal',
        margin: 0,
    },

    span: {
        fontWeight: 'bold',
        fontSize: '$md',
    }
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0rem 0.25rem',
})

export const Details = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    //height: '80%',

    div: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    button: {
        marginTop: '2.5rem',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
    },

    strong: {
        fontSize: '$large'
    }
})

export const TotalText = styled('strong', {
    fontSize: '$xl'
})

export const FlexContentCenter = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
})