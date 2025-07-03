import { queryOptions } from "@tanstack/react-query";

export default function queryTodo()
{
    return queryOptions({
    queryKey : ['Todos'],
    queryFn : getTodos,
  })
}

const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    if(!response.ok){
      throw new Error(`Failed to fetch Todos ${response.status}`)
    }
    const respData = await response.json()
    return respData;
}