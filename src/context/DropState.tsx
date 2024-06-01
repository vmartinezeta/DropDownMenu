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


export const DropProvider = ({ children, items, defaultSelected, itemsPerPage }: { children: ReactNode, items:string[], defaultSelected:string, itemsPerPage?:number }) => {
    const [selected, setSelected] = useState(defaultSelected)
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

    if (items.length === 0) {
        return <div className="items">
                <h1 className="items__empty">No hay elementos</h1>
            </div>
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