( () => {
	let theme = 'light';

	/**
	 * Function to toggle between themes
	 *
	 * @param {MouseEvent} event
	 */
	const onToggleTheme = ( { currentTarget } ) => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;

		document.documentElement.setAttribute( 'data-theme', newTheme );
		currentTarget.setAttribute( 'aria-pressed', newTheme === 'dark' );
	};

	// Get switch button and add click event
	const btn = document.querySelector( `.theme-switch` );
	if ( ! btn ) return;
	btn.addEventListener( 'click', onToggleTheme, false );
  
  
  // DEMO
	const toggle = document.querySelector( `.writing-toggle` );
  if ( ! toggle ) return;
  toggle.addEventListener('click', () => document.body.classList.toggle('vertical'));
} )();
