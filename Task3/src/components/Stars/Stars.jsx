import styles from "./styles.module.css"
import star from "./star.svg"
import star_filled from "./star_filled.svg"


export function Stars({ count })
{
	return <div>
		{
			new Array(5).fill().map((_, i) =>
				<img key={i} className={styles.star} src={count > i ? star_filled : star} alt={count > i ? "★" : "☆"} />
			)
		}
	</div>
}
