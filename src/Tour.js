import { useState } from "react";

const Tour = ({id, name, info, image, price, removeMe}) => {
    const [more, setMore] = useState(true)
    return(
        <article>
            <div>
                <img src={image} alt={image} />
            </div>
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4 className="price">${price}</h4>
                </div>
                <p>
                    {more ? `${info.substring(0, 200)} ... ` : `${info} `}
                    <button onClick={()=>setMore(!more)} className="more">
                        {more ? 'Read More': 'Show Less'}
                    </button>
                </p>
                <button onClick={()=>removeMe(id)} className="removeMe">
                    Not Interested
                </button>
            </footer>
        </article>
    )
}

export default Tour;