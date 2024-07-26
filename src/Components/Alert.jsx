import React from 'react'

function Alert(props) {
    const capitalized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1)
    }
  return (
   
     props.alert && <div class={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
  <strong>{capitalized(props.alert.types)}</strong>:{props.alert.message}.
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  
  )
}

export default Alert
