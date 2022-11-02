import { Link } from "react-router-dom";
import { classnames } from "../../classnames";
import styles from "./styles.module.css"


export function BookCategories({ categories, activeCategory, setActiveCategory })
{
	return <nav className={styles.root}>
		{
			categories.map(el =>
				<Link
					to={"/" + el.id}
					className={classnames(styles.item, activeCategory === el.id ? styles.item_selected : "")}
					key={el.id}
					onClick={() => setActiveCategory(el.id)}
				>
					{el.name}
				</Link>
			)
		}
	</nav>
}
