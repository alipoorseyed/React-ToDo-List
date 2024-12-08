export default function SideBar({ items, categoryshow }) {
    return (
      <div className="fixed pt-[10rem] left-0 top-0 h-[100vh] pl-[1rem] flex flex-col justify-start items-start gap-[1rem]">
        <div key="all-category">
          <input
            defaultChecked
            className="hidden peer"
            type="radio"
            name="checkcategory"
            id="ALL"
          />
          <label
            onClick={categoryshow}
            className="text-[#525252] font-[400] text-[22px] peer-checked:text-orange-400 cursor-pointer"
            htmlFor="ALL"
          >
            ALL
          </label>
        </div>
  
        {items.map((element, index) => (
          <div key={index}>
            <input
              className="hidden peer"
              type="radio"
              name="checkcategory"
              id={element}
            />
            <label
              htmlFor={element}
              onClick={categoryshow}
              className="text-[#525252] font-[400] text-[22px] peer-checked:text-orange-400 cursor-pointer"
            >
              {element}
            </label>
          </div>
        ))}
      </div>
    );
  }
  