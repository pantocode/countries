
export function CountryCard(country) {
  return (
    <div className="card">
        <h2>
            {country.name.common}
        </h2>
        <img src={country.flags.png}/>
    </div>
  )
}

