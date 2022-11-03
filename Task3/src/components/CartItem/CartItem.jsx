import styles from "./styles.module.css"
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";


export function CartItem({ item })
{
	const book = useSelector(selectBookById(item.bookId));

	if (!book) return <li key={item.bookId} className={styles.item}>
		<div className={styles.text}>Загрузка</div>
		<div className={styles.price}>
			{item.count > 1 ? `${item.count}шт × ` : ""}
			{0} &#x20bd;
		</div>
	</li>


	return <li key={item.bookId} className={styles.item}>
		<div className={styles.text}>{book.title}</div>
		<div className={styles.price}>
			{item.count > 1 ? `${item.count}шт × ` : ""}
			{book.price} &#x20bd;
		</div>
	</li>
}
