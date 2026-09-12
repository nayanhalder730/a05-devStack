import type { ITechnology } from "../type/type";

export interface TechnologiesProps {
  technologies: Promise<ITechnology[]>;
}

export default function Technologies({ technologies }: TechnologiesProps) {
  const technolohy=use(technologies.name)
  
  
    return <><h2> {technolohy.}</h2></>;
}
