import styles from "./styles.module.css"
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { Placeholder } from "../Placeholder/Placeholder";


export function CartItem({ item })
{
	const book = useSelector(selectBookById(item.bookId));

	if (!book) return createPlaceholder(item);

	return <li key={item.bookId} className={styles.item}>
		<div className={styles.text}>{book.title}</div>
		<div className={styles.price}>
			{item.count > 1 ? `${item.count}шт × ` : ""}
			{book.price} &#x20bd;
		</div>
	</li>
}

function createPlaceholder(item)
{
	return <li key={item.bookId} className={styles.item}>
		<div className={styles.text}><Placeholder width={10} widthD={5} unit="em" /></div>
		<div className={styles.price}>
			{item.count > 1 ? `${item.count}шт × ` : ""}
			{0} &#x20bd;
		</div>
	</li>
}
