import React, { useState } from 'react'
import './InputComponent.scss'

const InputComponent = () => {
	const [value, setValue] = useState('')
	return (
		<div className='_ab32'>
			<div className='x6s0dn4 xnz67gz x19gtwsn x1nk0tez x1xp9za0 x1hm1hlx x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x9f619 x5n08af x78zum5 x1q0g3np xvs91rp x1n2onr6 xh8yej3'>
				<label className={`_aa48${value ? ' _aa49' : ''}`}>
					<span className='_aa4a'>Phone number, username, or email</span>
					<input
						aria-label='Phone number, username, or email'
						aria-required='true'
						autoCapitalize='off'
						autoCorrect='off'
						maxLength='75'
						className='_aa4b _add6 _ac4d'
						dir=''
						type='text'
						value={value}
						name='username'
						onChange={(e) => setValue(e.target.value)}
					/>
				</label>
				<div className='x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 x1q0g3np x1c4vz4f x2lah0s xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x1sxyh0 x18d9i69 xkhd6sd x1n2onr6 xxymvpz'></div>
			</div>
		</div>
	)
}

export default InputComponent
