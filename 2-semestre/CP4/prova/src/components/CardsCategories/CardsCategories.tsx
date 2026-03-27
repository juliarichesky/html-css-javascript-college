import type { ReactNode } from "react";

type CardCats = {
  children: ReactNode;
};

const CardCategories = ({ children }: CardCats) => {
  return <>{children}</>;
};
export default CardCategories;
