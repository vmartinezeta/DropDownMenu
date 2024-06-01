import { useDrop } from "../context/DropState"

function DropIcon() {
    const {openMenu} = useDrop()
    const iconOpen = ["drop__icon", "drop__icon--open"]


    if (!openMenu) {
        iconOpen.pop()
    }

    return <div className={iconOpen.join(" ")}></div>
}

export default DropIcon