import React from 'react'


//here it will re-render only when props gets changed otherwise it will not re-render
const Child = React.memo(
    (props) => {
        console.log("child re-render again");
        
      return (
        <div>
          <button onClick={props.handleClick}>
            {props.btnName}
          </button>
        </div>
      )
    }
)

export default Child
