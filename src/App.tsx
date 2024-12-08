import { useState } from "react"
import Input from "./components/input"
import SideBar from "./components/sidebar"
import Task from "./components/task"

function App() {
  const [categoryshowitem,setcategoryshowitem] = useState("ALL");
  const [sidecategory,setsidecategory] = useState([]);
  const [text,settext] = useState("");
  const [category,setcategory] = useState("");
  const [items,setitems] = useState([]);

  const remove = (index) => {
    const newitem = items.filter((_, indexx) => indexx !== index);
    const newside = sidecategory.filter(category => 
      newitem.some(item => item.category === category)
    );
    setsidecategory(newside);
    setitems(newitem);
    setcategoryshowitem("ALL");
  };
  


  const categoryshow = (e) => {
    setcategoryshowitem(e.target.innerHTML);
  }


  const handletext = (e) => {
    settext(e.target.value);
  }

  const handlecategory = (e) => {
    setcategory(e.target.value);
  }

  const submit = () => {
    let counter = 0;
  
    if (text && category) {
      for (let i = 0; i < items.length; i++) {
        if (category === items[i].category) {
          counter++;
          break;
        }
      }
  
      if (counter === 0) {
        setsidecategory([...sidecategory, category]);
      }
  
      setitems([...items, { name: text, category : category }]);
  
      settext("");
      setcategory("");
    } else {
      alert("Category and task cannot be empty");
      return;
    }
  }
  

  return (
    <div>
      <div className="h-[100vh] fixed left-[15rem] mr-[5rem] w-[.1rem] bg-[#D8D8D8]"></div>
      <main className="pt-[3rem] pl-[17rem]">
      <h1 className="text-[32px] font-[700] mb-[1.5rem]">All Tasks</h1>
      <Input task_text_handle={handletext} task_category_handle={handlecategory} submit={submit} text={text} category={category} />
      <div className="flex flex-col justify-start items-start gap-[1.5rem]">
        
         { items.filter((element) => { 
          if (categoryshowitem === "ALL") {
            return true;
          }
          return element.category === categoryshowitem;
         }).map((element,index) => (
            <Task remove={() => remove(index)}  key={index} taskname={element.name} taskcategory={element.category} />
          )) }

      </div>
      </main>
      <aside>
        <SideBar categoryshow={categoryshow} items={sidecategory}/>
      </aside>
    </div>
  )
}

export default App
