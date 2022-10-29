import { classnames } from "../../classnames";
import styles from "./styles.module.css"


export const BookCategories = ({categories, activeCategory, setActiveCategory}) =>
{
	return <nav className={styles.root}>
		{
			categories.map(el =>
				<button
					className={classnames(styles.item, activeCategory === el.id ? styles.item_selected : "")}
					key={el.id}
					onClick={() => setActiveCategory(el.id)}
				>
					{el.name}
				</button>
			)
		}
	</nav>
}
