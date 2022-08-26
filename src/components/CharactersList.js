import React from 'react'

const CharactersList = ({ personajes }) => {
  return (
    <div className='container'>
      <div className="row">
        {      

          personajes.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card" style={{ minWidth: "200px" }}>
                <img className="card-img-top" src={item.imageUrl} alt="character" />
                <div className="card-body">
                  <h5 className="card-title">{item.fullName}</h5>
                  <hr />
                  <p className="card-text">Title: {item.title}</p>
                   <p className="card-text">Family: {item.family}</p>
                </div>
              </div>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default CharactersList
