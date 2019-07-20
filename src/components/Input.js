import React from 'react';


function Input({
	placeholder,
	value,
	onChange,
	type,
	name,
	label,
	required
}) {
	return (
		<div className="control-group">
			<div className="form-group floating-label-form-group controls">
				<label>{label}</label>
				{type != "select" ?
					<input type={type}
						className="form-control formulario"
						placeholder={placeholder}
						name={name}
						value={value}
						onChange={onChange}
						required={required}
					/> :
					name=="cGenero"?
					<select type={type}
						className="form-control formulario"
						placeholder={placeholder}
						name={name}
						value={value}
						onChange={onChange}
						required={required}>
						<option value="M">Masculino</option>
						<option value="H">Fenenimo</option>
					</select>:
					<select type={type}
					className="form-control formulario"
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					required={required}>
					<option value="1">1</option>
					<option value="2">2</option>
						
				</select>
				}
			</div>
		</div>
	);

}

export default Input;