// import SectionItem from "./SectionItem";

interface Subcategory {
  [key: string]: string[];
}
type listTypes = (string | Subcategory)[];

const list: listTypes = [
  { "Woman’s Fashion": ["item1", "item2", "item3"] },
  { "Men's Fashion": ["item1", "item2", "item3"] },
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
export default function SectionList() {
  return (
    <>
      <p className="text-red-600">Tailwind </p>
      <ul>
        {list.map((item, index) => {
          if (typeof item === "string") {
            console.log(item);
            return <li key={index}>{item}</li>;
          }
          if (typeof item === "object") {
            return (
              <ul key={index}>
                {Object.keys(item).map((subitem, subIndex) => {
                  console.log(subitem);
                  return (
                    <li key={subIndex} className="relative">
                      {subitem}
                      {`>`}
                      <ul className="absolute text-cyan-400 left-full">
                        {item[subitem].map(
                          (subCategoryItem, subCategoryIndex) => (
                            <li key={subCategoryIndex}>{subCategoryItem}</li>
                          )
                        )}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            );
          }
          console.log(typeof item);
          return null; // Add a return statement for the default case
        })}
      </ul>
    </>
  );
}
