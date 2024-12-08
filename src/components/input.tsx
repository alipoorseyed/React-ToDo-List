export default function Input({task_text_handle,task_category_handle,submit,text,category}){
    return(
        <div className="flex flex-row justify-start items-center gap-[1rem] mb-[2rem]">
        <input onChange={task_text_handle} value={text} className="w-[26rem] px-[1rem] py-[.5rem] rounded-[.5rem] bg-[#F3F3F3]" placeholder="Add a new task ..." type="text" />
        <input onChange={task_category_handle} value={category} className="px-[1rem] py-[.5rem] rounded-[.5rem] bg-[#F3F3F3]" placeholder="choose your category ..." type="text" />
        <button onClick={submit} className="px-[1rem] py-[.5rem] rounded-[.5rem] bg-[#EA5959]">submit</button>
        </div>
    )
}