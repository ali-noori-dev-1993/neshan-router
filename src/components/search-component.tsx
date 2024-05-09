import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const generalCs =
  "fixed flex flex-col shadow-[0_4px_12px_rgba(0,_0,_0,_.25)] bg-[#fff] transition-all";
const closeCn = "right-7 top-7 w-[388px] rounded-2xl";
const openCn = "h-full right-0 top-0 w-[420px]";
const inputWrapperCs =
  "flex items-center w-full h-10 py-2 px-4 gap-3 border border-[#d9d9d9] rounded-2xl";

export function SearchComponent() {
  const [open, setOpen] = useState(false);

  const handleClose = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <div
      onClick={() => setOpen(true)}
      className={`${generalCs} ${open ? openCn : closeCn}`}
    >
      <div className={open ? "p-4" : ""}>
        <div className={`${inputWrapperCs} ${open ? "bg-[#f5f5f5]" : ""}`}>
          <input className="outline-none w-full bg-transparent" />
          <FaSearch className="h-full cursor-pointer" />

          {open && (
            <div className="flex gap-2 h-full">
              <hr className="border-l border-l-[#d9d9d9] h-full" />
              <IoCloseSharp
                onClick={handleClose}
                className="text-xl cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {open && (
        <>
          <div className="bg-[#f1f1f3] h-[6px] w-full" />
          <p className="mt-4 text-center text-gray-500 text-sm">
            تاریخچه جستجوی‌ شما اینجا نمایش داده خواهد شد
          </p>
        </>
      )}
    </div>
  );
}
