import DropItems from "./components/DropItems"
import DropItemSelected from "./components/DropItemSelected"
import { DropProvider } from "./context/DropState"
import "./main.scss"

const items = [
	"Lenovo",
	"Dell",
	"Vaio",
	"Hp",
	"Apple",
	"Samsung"
]


function DropDownMenu() {
	return <DropProvider items={items}>
		<div className="main">
			<h1 className="main__title">DropDownMenu</h1>
			<div className="drop">
				<DropItemSelected name="laptop" />
				<DropItems />
			</div>
		</div>
	</DropProvider>
}

export default DropDownMenu