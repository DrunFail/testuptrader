import { useState } from "react";
import { Todo } from "../../interfaces/interfaces";

export default function Search() {
    const [dataSearch, setDataSearch] = useState('')

    let searched: Todo[] = []

    const search = (array: Todo[]) => {
        if (typeof +dataSearch == 'number') {
            array.map(elem => {
                if (elem.id == +dataSearch) {
                    searched.push(elem)
                }
                if (elem.nestedTodo.length) {
                    return search(elem.nestedTodo)
                }
            })
        }

        if (typeof dataSearch == 'string') {
            console.log('here')
            array.map(elem => {
                if (elem.title.toLowerCase().includes(dataSearch.toLowerCase())) {
                    searched.push(elem)
                }
                if (elem.nestedTodo.length) {
                    return search(elem.nestedTodo)
                }
            })
        }
    }
    
    
    return (
        <form>
            <label>search</label>
            <input
                value={dataSearch}
                type='search'
                onChange={(e) => setDataSearch(e.target.value) }
            />
        </form>
        );
}