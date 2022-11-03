import { BookList } from "../../components/BookList/BookList"
import { Cart } from "../../components/Cart/Cart"
import styles from "./styles.module.css"


export function CartPage()
{
	return <main className={styles.main}>
		<Cart className={styles.panel}/>
		<BookList displayCart={true} />
	</main>
}
