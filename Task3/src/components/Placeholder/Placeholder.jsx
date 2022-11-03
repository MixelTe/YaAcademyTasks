import { useEffect, useRef } from "react";
import { classnames } from "../../classnames"
import styles from "./styles.module.css"


export function Placeholder({ className, style, width, height, rounded, widthD, heightD, unit })
{
	const ref = useRef();
	useEffect(() =>
	{
		let w = width;
		let h = height;
		if (unit)
		{
			if (width && widthD) w = `${width + Math.floor(Math.random() * widthD) - widthD / 2}${unit}`;
			if (height && heightD) h = `${width + Math.floor(Math.random() * widthD) - widthD / 2}${unit}`;
		}
		w = w || "100%";
		h = h || "100%";
		ref.current.style.setProperty("--data-width", `${w}`);
		ref.current.style.setProperty("--data-height", `${h}`);

		const rect = ref.current.getBoundingClientRect();
		ref.current.style.setProperty("--data-x", `${rect.left}px`);
		ref.current.style.setProperty("--data-y", `${rect.top}px`);
		ref.current.style.setProperty("--data-w", `${window.innerWidth}px`);
		ref.current.style.setProperty("--data-h", `${window.innerHeight}px`);
	}, [ref, width, height, widthD, heightD, unit]);

	return <div className={classnames(className, styles.root)} style={style}>
		<div className={classnames(styles.inner, rounded ? styles.inner_rounded : "")} ref={ref}>#</div>
	</div>
}
