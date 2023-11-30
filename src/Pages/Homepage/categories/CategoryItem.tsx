type Props = {
  url: string;
  categoryTxt: string;
  isSelected: boolean;
  selectCurrent: () => void;
};

export default function CategoryItem({
  url,
  categoryTxt,
  isSelected,
  selectCurrent,
}: Props) {
  return (
    <div
      className={`${
        isSelected ? "bg-secondaryred" : "bg-white"
      } w-[170px] h-[145px] rounded border-[1px] border-solid border-bordercolor flex flex-col gap-4`}
      onClick={selectCurrent}
    >
      <img
        src={url}
        className={`${isSelected ? "invert	" : ""} mx-auto mt-auto `}
      />
      <div
        className={`mx-auto mb-auto ${
          isSelected ? "text-white" : "text-black"
        }  `}
      >
        {categoryTxt}
      </div>
    </div>
  );
}
