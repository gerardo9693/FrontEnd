import React from 'react';

function Input({placeholder,value,onChange,type,required,name,label}){
    return(
        <div className="control-group">
        <div className="form-group floating-label-form-group controls">
          <label className="formulario">{label}</label>
          <input type={type} className="form-control formulario" placeholder={placeholder} id={name} value={value} onChange={onChange} required={required} data-validation-required-message="Please enter your name."/>
          <p className="help-block text-danger"></p>
        </div>
      </div>

    );
}

export default Input;