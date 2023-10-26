import Tour from "./Tour";

const Tours = ({tours, removeMe})=> {
    return(
        <section>
            <div>
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour)=>{
                    return(
                        <Tour key={tour.id} {...tour} removeMe={removeMe}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Tours;