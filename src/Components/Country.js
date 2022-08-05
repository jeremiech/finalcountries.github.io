import React, { useEffect,useState } from 'react'
import {Link, useParams,} from 'react-router-dom'

const Country = () => {
  const [country,setCountry]=useState([])
  const {name}=useParams();
  useEffect(()=>{
    const fetcCountryDate=async ()=>{
      const response=await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      const country=await response.json()
      setCountry(country)
    }
    fetcCountryDate()},[])
  return (
    <>
  <Link to="/"><i className='btn'></i> Back Home</Link>

      <h1>Country Data</h1>
    <div className='country'> 
    {
      country.map((c)=>{
        const {  
          numericCode , 
          name, population, 
          region, 
          capital, nativeName,
          flag,subregion,
          border,topLevelDomain,currencies,languages,

      } = c   
      return(
        <article key={numericCode}>
                <div>
                <div className='flag'>
                <img src={flag} alt={name} />

                </div>
                    <div className="details">
                    <h3>{name}</h3>
                    <div>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                    <h4>Native Name:<span>{nativeName}</span></h4>
                    </div>
                    <div>
                    <h4>Domain:<span>{topLevelDomain}</span></h4>
                    <h4>Currency:<span>{currencies[0].name}</span></h4>
                    <h4>Language:<span>{languages[0].name}</span></h4>
                    <h4>Sub Region:<span>{subregion}</span></h4>
                    </div>
                    <div>
                    <h4>Border Countries:<span>{border}</span></h4>
                    </div>

                    <div className='buttons'></div>
                    </div>
                </div>
            </article>
      )

      })
    }
    </div>
    </>
  )
}

export default Country