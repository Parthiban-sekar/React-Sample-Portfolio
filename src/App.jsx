import React from 'react'

function App() {
  const data = [{
    Title: "Project One", 
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam"
  },
  {
     Title: "Project Two",
     Description:"consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit,"    
  },
  {
    Title: "Project Three",
    Description: "nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
  },
  {
    Title: "Project FOur", 
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam"
  },
  {
     Title: "Project Five",
     Description:"consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit,"    
  },
  {
    Title: "Project Six",
    Description: "nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
  }
]
  return (
    <>
<div className="container">
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row">
    {
      data.map((ele,i)=>{
        return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{ele.Title}</a>
          </h4>
          <p className="card-text">{ele.Description} </p>
        </div>
      </div>
    </div>
      })
    }
    
  </div>
</div>
    </>
  )
}

export default App