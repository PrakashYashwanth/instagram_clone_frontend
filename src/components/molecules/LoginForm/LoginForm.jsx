import React from 'react'
import './LoginForm.scss'
import InputComponent from '../../atoms/InputComponent/InputComponent'

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
				<div className='login_form_main'>
					<form className='login_form_ele' id='loginForm' method='post'>
						<div className='form_outer_div'>
							{/* <div className='form_inner_div'>
								<div className='form_username'>
									<label className='form_username_label'>
										<span className='_aa4a'>
											Phone number, username, or email
										</span>
										<input
											aria-label='Phone number, username, or email'
											aria-required='true'
											autoCapitalize='off'
											autoCorrect='off'
											maxLength='75'
											className='form_username_value'
											dir=''
											type='text'
											// value='9490536802'
											name='username'
										/>
									</label>
									<div className='x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 x1q0g3np x1c4vz4f x2lah0s xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x1sxyh0 x18d9i69 xkhd6sd x1n2onr6 xxymvpz'></div>
								</div>
							</div>
							<div className='form_inner_div'>
								<div className='form_password'>
									<label className='form_password_label'>
										<span className='_aa4a'>Password</span>
										<input
											aria-label='Password'
											aria-required='true'
											autoCapitalize='off'
											autoCorrect='off'
											className='form_password_value'
											type='password'
											// value='jd0!ZLrKW4D0Hbf'
											name='password'
										/>
									</label>
									<div className='x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 x1q0g3np x1c4vz4f x2lah0s xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x1sxyh0 x18d9i69 xkhd6sd x1n2onr6 xxymvpz'>
										<div className='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1'>
											<button className='_acan _acao _acat _aj1-' type='button'>
												Show
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1xmf6yo x1e56ztr x540dpk x1m39q7l x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1'>
								<button className='_acan _acap _acas _aj1-' type='submit'>
									<div className='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1'>
										Log in
									</div>
								</button>
							</div>
							<div className='_ab39'>
								<div className='x78zum5 x1q0g3np'>
									<div className='x1iyjqo2 xs83m0k xjm9jq1 x1n2onr6 xwtuau4 x11mr3az'></div>
									<div className='x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1roi4f4 x78zum5 xdt5ytf x1c4vz4f x2lah0s x1nxh6w3 x1s688f x1ly1vsg xdj266r xpdqn1h xat24cr x1sliqq xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xtvhhri x11njtxf'>
										or
									</div>
									<div className='x1iyjqo2 xs83m0k xjm9jq1 x1n2onr6 xwtuau4 x11mr3az'></div>
								</div>
							</div>
							<div className='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1xmf6yo x1e56ztr x540dpk x1m39q7l x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1'>
								<button className='_acan _acao _acas _aj1-' type='button'>
									<span className=' _a04s _ab36'></span>
									<span className='_ab37'>Log in with Facebook</span>
								</button>
							</div> */}
							<InputComponent />
						</div>
						<a
							className='x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _ab2y _a6hd'
							href='/accounts/password/reset/'
							role='link'
							tabIndex='0'
						>
							<span
								className='x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye x1fhwpqd xo1l8bm x7l2uk3 x10wh9bi x1wdrske x8viiok x18hxmgj'
								dir='auto'
								// style='line-height: var(--base-line-clamp-line-height); --base-line-clamp-line-height: 16px;'
							>
								Forgot password?
							</span>
						</a>
					</form>
				</div>
			</div>
			<div className='login_form_comp'></div>
		</div>
	)
}

export default LoginForm
