import { useDrop } from "../context/DropState"

type Props = {
    name: string
}


function DropItemSelected({ name }: Props) {
    const { selected, toggleMenu } = useDrop()
    return <input
        readOnly={true}
        onClick={toggleMenu}
        className="drop__input"
        name={name}
        value={selected}
    />
}

export default DropItemSelected