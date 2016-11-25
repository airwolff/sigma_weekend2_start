$(document)
	.ready(function () {
		$.ajax({
				type: 'GET',
				url: '/data',
				success: function (data) {
						var sigmanauts = data.sigmanauts;
						console.log('GET/data returns ', sigmanauts);
						var i = 0;
						var backInt = null;
						var aheadInt = null;
						$('#prev')
							.on('click', backward);
						$('#next')
							.on('click', forward);
						info(sigmanauts[i]);

						function info(sigmanauts) {
							$('#name')
								.text(sigmanauts.name);
							$('#userName')
								.text(sigmanauts.git_username);
							$('#shout')
								.text(sigmanauts.shoutout);
							// $( '.text' )
							//  .fadeIn( 'fast' );
						} // end function info
						function forward() {
							if (i === sigmanauts.length - 1) {
								i = 0;
								info(sigmanauts[i]);
								i++;
								fastFoward()
							} else {
								i++;
								info(sigmanauts[i]);
								fastFoward();
							}
						} // end function forward
						function backward() {
							if (i === 0) {
								i = sigmanauts.length - 1;
								info(sigmanauts[i]);
								rewind()
							} else {
								i--;
								info(sigmanauts[i]);
								rewind()
							}
						} // end function backward
						function rewind() {
							if (backInt) {
								clearInterval(backInt);
								clearInterval(aheadInt);
								// $( '.text' )
								//  .fadeOut( 'slow' );
							}
							backInt = setInterval(backward, 9000);
						} // end function rewind
						function fastFoward() {
							if (aheadInt) {
								clearInterval(aheadInt);
								clearInterval(backInt);
								// $( '.text' )
								//  .fadeOut( 'slow' );
							}
							aheadInt = setInterval(forward, 9000);
						}
					} // end function fastFoward
			}) // end function success
	}); // end ajax
// end ready function
