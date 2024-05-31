import { ReactNode, createContext, useContext, useState } from "react"

type State = {
    items: string[]
    selected: string
    openMenu: boolean
    indexItem: number
    sigIndexItem: () => void
    isAtEnd: () => boolean
    toggleMenu: () => void
    onSelected: (text: string) => void
}


const DropContext = createContext<State>({
    items: [],
    selected: "",
    openMenu: false,
    indexItem: 0,
    sigIndexItem: () => { },
    isAtEnd: () => false,
    toggleMenu: () => { },
    onSelected: () => { }
})


export const useDrop = () => {
    const context = useContext(DropContext)
    if (!context) {
        throw new TypeError("Deberia usarse con el DropProvider")
    }
    return context
}


export const DropProvider = ({ children, items }: { children: ReactNode, items:string[] }) => {
    const [selected, setSelected] = useState("Lenovo")
    const [openMenu, setOpenMenu] = useState(false)
    const [indexItem, setIndexItem] = useState(0)


    const onSelected = (text: string) => {
        setSelected(text)
        setOpenMenu(false)
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
        if (!openMenu) {
            setIndexItem(0)
        }
    }


    const sigIndexItem = () => {
        setIndexItem(indexItem + 1)
    }

    const isAtEnd = () => {
        return indexItem > items.length
    }

    return <DropContext.Provider value={{
        items,
        selected,
        openMenu,
        indexItem,
        sigIndexItem,
        isAtEnd,
        toggleMenu,
        onSelected
    }}>
        {children}
    </DropContext.Provider>
}