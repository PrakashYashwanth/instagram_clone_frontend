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
							<InputComponent comp='userName' />
							<InputComponent comp='password' />
							<button className='login_button' type='submit'>
								Log in
							</button>
							<div className='or_section'>
								<div className='line_section'></div>
								<div className='main_or'>or</div>
								<div className='line_section'></div>
							</div>
							<div className='login_fb_section'>
								<button className='fb_login_button' type='button'>
									<span className='fb_logo'></span>
									<span className='fb_button_text'>Log in with Facebook</span>
								</button>
							</div>
						</div>
						<a
							className='forgot_password_link'
							href='/accounts/password/reset/'
							role='link'
						>
							<span className='forgot_password'>Forgot password?</span>
						</a>
					</form>
				</div>
			</div>
			<div className='login_form_comp'>
				<span className='no_account'>
					<p className='signup_para'>
						Don&apos;t have an account?&nbsp;
						<a
							className='singup_link'
							href='/accounts/emailsignup/'
							role='link'
						>
							<span className='signup_text'>Sign up</span>
						</a>
					</p>
				</span>
			</div>
			<div className='get_app_section'>
				<div className='get_app_text'>
					<span className='x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x2b8uid x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj'>
						Get the app.
					</span>
				</div>
				<div className='get_app_logos'>
					<a
						aria-label='Get it on Google Play'
						className='app_logo'
						href='https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=ig_mid%3D807B13EB-4D1E-4F03-A187-081FE33285A3%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge'
						rel='nofollow noreferrer'
						role='link'
						target='_blank'
					>
						<img
							alt='Get it on Google Play'
							className='logo_image'
							src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png'
						/>
					</a>
					<a
						aria-label='Get it from Microsoft'
						className='app_logo'
						href='ms-windows-store://pdp/?productid=9nblggh5l9xt&amp;referrer=appbadge&amp;source=www.instagram.com&amp;mode=mini&amp;pos=0%2C0%2C1920%2C1020'
						rel='nofollow noreferrer'
						role='link'
						target='_blank'
					>
						<img
							alt='Get it from Microsoft'
							className='logo_image'
							src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
