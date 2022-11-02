import styles from "./styles.module.css"


export function Text({ text, className })
{
	return <div className={className ? className : ""}>
		{
			text.split("\n").map((p, i) =>
				<p key={i} className={styles.text}>{p}</p>
			)
		}
	</div>
}
