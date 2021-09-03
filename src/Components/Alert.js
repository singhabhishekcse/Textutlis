import React from 'react'

const Alert = (props) => {
  const capitilized = (word)=>{
      let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

  }

    return (
            props.alert &&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitilized(props.alert.type)}</strong> {props.alert.meesage}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}

export default Alert
