import MyInput from "./Ui/Input/MyInput"
import { MySelect } from "./Ui/Select/MySelect"  

export const PostFilter = ({filter, setFilter}) => {
 
  return (
    <div className="inputSearch">   
    <MyInput
      value={filter.query}
      onChange={(e) => setFilter({...filter, query:  e.target.value})}  
      placeholder="Поиск..."
    ></MyInput>
    <div className="select">

    <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}  
      defaultValue="Сортировка"
      options={[
        { value: "title", name: "По названию " },
        { value: "body", name: "По описанию " },
      ]}
    ></MySelect>
    </div>
  </div>
  )
}
