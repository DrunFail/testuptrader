import { FAKE_DATA } from "../data";
import TodoItemCard from "./TodoItemCard/TodoItemCard";

export default function TodoList() {

    



    return (
        <section>
            <h1>todo list</h1>
            {FAKE_DATA.map(item =>
                <TodoItemCard
                    key={item.id}
                    item={item} />)}
        </section>

    );
}