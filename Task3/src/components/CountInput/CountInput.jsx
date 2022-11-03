import { useDispatch, useSelector } from "react-redux";
import { classnames } from "../../classnames"
import { cartSlice } from "../../store/cart";
import { selectCartBookCountById } from "../../store/cart/selectors";
import styles from "./styles.module.css"


export function CountInput({ bookId })
{
	const dispatch = useDispatch();
	const count = useSelector(selectCartBookCountById(bookId));

	return <div className={styles.root}>
		<button
			className={classnames(styles.button, styles.button_minus)}
			onClick={() => dispatch(cartSlice.actions.removeItem(bookId))}
			disabled={count === 0}
		></button>
		<span className={styles.number}>{count}</span>
		<button
			className={classnames(styles.button, styles.button_plus)}
			onClick={() => dispatch(cartSlice.actions.addItem(bookId))}
		></button>
	</div>
}
