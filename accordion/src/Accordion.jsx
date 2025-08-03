function Accordion({data , isOpen , onClick})
{
    return <>
        <div onClick={onClick}><h3>{data.question}</h3></div>
        <div>{isOpen ? <h3>{data.answer}</h3> : null}</div>
    </>
}

export default Accordion;