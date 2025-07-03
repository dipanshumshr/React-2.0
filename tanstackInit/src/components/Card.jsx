import { useSuspenseQuery } from "@tanstack/react-query";
import queryTodo from "../QueryOptions/queryTodo";

function Card()
{
    const { data } = useSuspenseQuery(queryTodo())

    return(
        <>
            <ul>
                {data.slice(0,10).map(value=> { 
                    return <li key = {value.id}> {value.title} by {value.userId} <p>{value.completed ? "👌" : "😒"}</p></li>
            })}
            </ul>
        </>
    )
}

export default Card