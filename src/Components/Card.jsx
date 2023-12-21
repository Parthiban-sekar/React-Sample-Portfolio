import React from 'react'

function Card(props) {
    console.log(props.cardData.Title);
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{props.cardData.Title}</a>
          </h4>
          <p className="card-text">{props.cardData.Description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card