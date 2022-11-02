import { classnames } from "../../classnames"
import styles from "./styles.module.css"


export function Stars({ count })
{
	return <div>
		{
			new Array(5).fill().map((_, i) =>
				<span key={i} className={classnames(styles.star, i < count ? styles.star_active : "")}></span>
			)
		}
	</div>
}
