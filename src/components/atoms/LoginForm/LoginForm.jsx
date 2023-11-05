import React from 'react'
import './LoginForm.scss'

const LoginForm = () => {
	return (
		<div className='login_from'>
			<div className='login_form_comp'>
				<div className='logo_div'>
					<div
						aria-disabled='false'
						role='button'
						tabIndex='0'
						style={{ cursor: 'pointer' }}
					>
						<i
							data-visualcompletion='css-img'
							aria-label='Instagram'
							className=''
							role='img'
							style={{
								backgroundImage: `url(
									'https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png'
								)`,
								backgroundPosition: '0px 0px',
								backgroundSize: '176px 186px',
								width: '174px',
								height: '50px',
								backgroundRepeat: 'noRepeat',
								display: 'inline-block',
							}}
						></i>
					</div>
				</div>
			</div>
			<div className='login_form_comp'></div>
		</div>
	)
}

export default LoginForm
