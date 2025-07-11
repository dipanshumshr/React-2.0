import useCounterStore from "../app/counterStore";

function Counter()
{
    const { count,increment,decrement,reset} = useCounterStore();

    return (
        <div>
            <h2>Count : {count}</h2>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;