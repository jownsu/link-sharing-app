import { type SVGProps } from "react";

/* TODO: USE ENV */
const domain = "http://localhost:3000/";

interface Props extends SVGProps<SVGSVGElement> {
	path: string;
	id: string;
}

const Icon = ({ path, id, ...props }: Props) => {
	return (
		<svg {...props}>
			<use href={`${domain}${path}#${id}`} />
		</svg>
	);
};

export default Icon;
