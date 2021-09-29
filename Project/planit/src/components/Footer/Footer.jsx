import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscrition'>
                <p className='footer-subcription-heading'>
                </p>
                <p className='footer-subscription-text'>
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email'
                            name='email'
                            placeholder='Your Email Address'
                            className='footer-input' />
                        <Button buttonStyle='btn-outline'>Subscribe</Button>
                    </form></div>
            </section> */}
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to=''>Careers</Link>
                        <Link to=''>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div> */}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className="footer-logo">
                        <Link className='social-logo'>
                            PlanIT <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>PlanIT ©️ 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/fb'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/instagram'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/youtube'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/twitter'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='/linkedin'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer