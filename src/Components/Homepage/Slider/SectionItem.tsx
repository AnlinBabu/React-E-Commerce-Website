import React from "react";

interface Subcategory {
  [key: string]: string[];
}
interface Props {
  categories: (string | Subcategory)[];
}

export default function SectionItem({ categories }: Props) {
  return <div>SectionItem</div>;
}
