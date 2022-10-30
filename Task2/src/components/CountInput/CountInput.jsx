import { useState } from "react"
import { classnames } from "../../classnames"
import styles from "./styles.module.css"


export function CountInput()
{
	const [count, setCount] = useState(0);

	return <div className={styles.root}>
		<button
			className={classnames(styles.button, styles.button_minus)}
			onClick={() => setCount(count - 1)}
			disabled={count === 0}
		></button>
		<span className={styles.number}>{count}</span>
		<button
			className={classnames(styles.button, styles.button_plus)}
			onClick={() => setCount(count + 1)}
		></button>
	</div>
}
