import { Card } from "../Card/Card"
import { Stars } from "../Stars/Stars"
import { Text } from "../Text/Text"
import styles from "./styles.module.css"


export function Review({ review })
{
	return <Card>
		<div className={styles.header}>
			<h1 className={styles.header__text}>{review.author}</h1>
			<Stars count={review.rating} />
		</div>
		<Text text={review.text} />
	</Card>
}
