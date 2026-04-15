import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function CategoryContainer({
  classname,
  children,
}: Props & { classname: string }) {
  return <div className={classname}>{children}</div>;
}

export default CategoryContainer;
