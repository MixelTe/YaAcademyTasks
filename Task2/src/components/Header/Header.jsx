import styles from "./styles.module.css"
import icon from "./shoppingCart.svg"


export const Header = () =>
{
	return <header className={styles.header}>
		<h1 className={styles.title}>Магазин</h1>
		<img className={styles.icon} src={icon} alt="Shopping cart" />
	</header>
}