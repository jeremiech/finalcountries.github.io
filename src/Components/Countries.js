import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin3Fill} from "react-icons/ri";



const url = 'https://restcountries.com/v2/all'
const Countries = () =>{

   
    const [countries, setCountries] = useState([])

    

    useEffect(() => {
        
        const fetchCountryData = async() => {
        const response =  await fetch(url)
        const countries = await response.json()
        setCountries(countries) 
        console.log(countries)
      }
      fetchCountryData()
    }, [])

const remoiveCountr=(numericCode)=>{
    const newCountry=countries.filter((country)=>
        country.numericCode!==numericCode

    )
    setCountries(newCountry)
}

    
    return (
    <>
    <section className="grid">

{countries.map((country) => {
        const {  
            numericCode , 
            name, population, 
            region, 
            capital, 
            flag 
        } = country

        

        return <article key={numericCode}>
                <div>
                    <img src={flag} alt={name} />
                    <div className="details">
                    <h3>{name}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                    <div className='buttons'>
                    <Link to={`countries/${name}`} className="btn">
                        Learn more
                    </Link>
                    <button className='btn' onClick={()=>remoiveCountr(numericCode)} ><RiDeleteBin3Fill style={{
                        fontSize:"20px",
                        background:"transparent"
                    }} /></button>
                    </div>
                    </div>
                </div>
                
            </article>
    })}
    </section>
    
    </>

    )
};
export default Countries;
