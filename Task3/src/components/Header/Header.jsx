import styles from "./styles.module.css"
import icon from "./shoppingCart.svg"
import { Link } from "react-router-dom"


export function Header()
{
	return <header className={styles.header}>
		<Link className={styles.link} to="/">
			<h1 className={styles.title}>Магазин</h1>
		</Link>
		<Link className={styles.link} to="/cart">
			<img className={styles.icon} src={icon} alt="Shopping cart" />
		</Link>
	</header>
}