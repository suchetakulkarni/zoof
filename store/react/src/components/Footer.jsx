import React from 'react';
import Logo from "./Logo";

class Header extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer_inside">
						<div className="copyright">
							<Logo />
							<div className="year">© 2019</div>
						</div>
						<div className="contacts">
							<p>160 Nagar</p>
							<p>Bangalore, Karnataka 590030</p>
							<p>+91 1234567890</p>
							<p>sales@shop.com</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Header;
