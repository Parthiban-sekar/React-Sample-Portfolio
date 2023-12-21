import React from 'react'
import Card from './Components/Card'

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
        return <Card cardData={ele} key={i}/>
      })
    }
    
  </div>
</div>
    </>
  )
}

export default App