
function CounterTwo({ increment })
{
    const handleClick = () => {
        increment(prev => prev + 2);
    }
    return(
        <button onClick={handleClick}>Increment</button>
    )
}

export default CounterTwo;