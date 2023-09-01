function Item({question, answer}){
    return (
        <div className="question">
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    )
}

export default Item