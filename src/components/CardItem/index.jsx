import "./CartdItem.css";

function CardItem(props) {
    const { title, style } = props;
    return (
        <>
            <div className="card-item" style={style}>
                {title && (<h4>{title}</h4>)}
            </div>
        </>
    )
}

export default CardItem;
