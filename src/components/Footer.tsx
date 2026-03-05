export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
		<footer>
			<div className="footer-logo">
				GODMOD
			</div>
			<div className="social-row">
				<a
					href="https://instagram.com/godmod__"
					className="social-link"
				>
					Instagram
				</a>
				<a href="mailto:godmod2534@gmail.com" className="social-link">
					Email
				</a>
				<a href="https://wa.me/2348088850824" className="social-link">
					WhatsApp
				</a>
				<a
					href="https://facebook.com/profile.php?id=61586453498109"
					className="social-link"
				>
					Facebook
				</a>
			</div>
			<p className="footer-copy">
				© {currentYear} GodMod · Powered by{" "}
				<a
					href="https://www.instagram.com/nissibyte/"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					nissibyte
				</a>
			</p>
		</footer>
  );
};
