import {  useSelector } from 'react-redux'
import Country from "./Country"
import Bar from './Bar'

const CountryList = () => {

    const worldList = useSelector(state => state.world)

    const container = worldList; 

    return (
        <div className="world">
            <Bar />
            {container && (<div /*style={{
                    display: "flex", gap: "2em", flexWrap: "wrap", backgroundColor: 'green', marginTop: '4%'
                }}*/ className="cards" >

                    {
                        container.map((el) => (

                            <Country name={el.name} capital={el.capital} population={el.population} flag={el.flag} region={el.region} cur={el.currencies[0].name} lang={el.languages[0].name} />


                        )

                        )
                    }

                </div>)}
                {container.length === 0 && <h1 style={{color:"white",fontSize:"45px"}} >Not Found</h1>}
        </div>
    )

}


export default CountryList;