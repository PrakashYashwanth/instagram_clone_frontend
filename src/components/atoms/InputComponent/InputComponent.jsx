import React, { useState } from 'react'
import './InputComponent.scss'

// eslint-disable-next-line react/prop-types
const InputComponent = ({ comp }) => {
	const [value, setValue] = useState('')
	const [show, setShow] = useState(false)

	if (comp === 'userName') {
		return (
			<div className='input_comp'>
				<div className='input_comp_div'>
					<label className={`input_lable${value ? ' afterVal' : ''}`}>
						<span className='input_lable_text'>
							Phone number, username, or email
						</span>
						<input
							aria-label='Phone number, username, or email'
							aria-required='true'
							maxLength='75'
							className='input_lable_value'
							dir=''
							type='text'
							value={value}
							name='username'
							onChange={(e) => setValue(e.target.value)}
						/>
					</label>
				</div>
			</div>
		)
	} else if (comp === 'password') {
		return (
			<div className='input_comp'>
				<div className='input_comp_div'>
					<label className={`input_lable${value ? ' afterVal' : ''}`}>
						<span className='input_lable_text'>Password</span>
						<input
							aria-label='Password'
							aria-required='true'
							className='input_lable_value'
							type={`${show ? 'text' : 'password'}`}
							value={value}
							onChange={(e) => setValue(e.target.value)}
							name='password'
						/>
					</label>
					<div className='password_button_comp'>
						<button
							className='password_button'
							type='button'
							onClick={() => setShow(!show)}
							disabled={!value}
						>
							{!value ? 'Show' : !show ? `Show` : `Hide`}
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default InputComponent
