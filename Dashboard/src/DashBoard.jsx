function DashBoard({ data, isActiveTab, onClick }) {
    return <div>
        <div className="Tab-Header" onClick={onClick}>
            <h5>
                {data.label}
            </h5></div>
       { isActiveTab ? <div className="Tab-content">
            <p>
                <strong>{data.content}</strong>
            </p>
        </div> : null
        }
    </div>
}
export default DashBoard;