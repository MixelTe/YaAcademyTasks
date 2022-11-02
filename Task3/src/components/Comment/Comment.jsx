import { Card } from "../Card/Card"
import { Stars } from "../Stars/Stars"
import { Text } from "../Text/Text"
import styles from "./styles.module.css"


export function Comment({ comment })
{
	return <Card>
		<div className={styles.header}>
			<h1 className={styles.header__text}>{comment.author}</h1>
			<Stars count={comment.rating} />
		</div>
		<Text text={comment.text}/>
	</Card>
}
