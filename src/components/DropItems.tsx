import { useDrop } from "../context/DropState"
import DropItem from "./DropItem"
import { useEffect } from "react"


function DropItems() {
    const { items, sigIndexItem, indexItem, isAtEnd, openMenu, onSelected } = useDrop()

    useEffect(() => {

        if (isAtEnd()) {
            return
        }

        const timer = setInterval(() => {
            if (isAtEnd()) {
                return
            }
            sigIndexItem()
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [openMenu, indexItem])


    if (!openMenu) return


    const getItems = () => {
        const subItems = items.filter((_, i) => i <= indexItem)
        return subItems.map((text, i) => {
            if (i === subItems.length - 1) {
                return <DropItem key={i} onSelected={onSelected} text={text} isNew={true} />
            }
            return <DropItem key={i} onSelected={onSelected} text={text} isNew={false} />
        })
    }


    return <div className="drop__items">
        <div className="drop__items--inner">
            {getItems()}
        </div>
    </div>
}

export default DropItems