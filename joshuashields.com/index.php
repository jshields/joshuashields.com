<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
	<meta name="mobileoptimized" content="0" />
	<meta name="description" content="Joshua Shields, specializing in web, app, and game development." />
	<meta name="author" content="Joshua Shields" />
	<title>Joshua Shields | Design &amp; Development</title>
	<meta property="og:site_name" content="Joshua Shields" />
	<meta property="og:title" content="Joshua Shields Design and Development" />
	<meta property="og:url" content="http://www.joshuashields.com" />
	<meta property="og:description" content="Joshua Shields' personal site." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="http://www.joshuashields.com/images/shield_logo_4.png" />
	<meta name="theme-color" content="#222">
	<link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto' type='text/css' />
	<link rel="stylesheet" href="css/main.css" type="text/css" />
	<link rel="shortcut icon" href="http://www.joshuashields.com/favicon.ico?v=1" type="image/x-icon" />
	<link rel="icon" href="http://www.joshuashields.com/favicon.ico?v=1" type="image/x-icon" />
</head>
<body>
<section id="modals">
	<div id="secret-modal" class="modal">
		<div class="modal-back">
			<div class="modal-front">
				<div class="modal-content">
					<h1>secret</h1>
					<p>
                        Wow! A secret modal.
                    </p>
					<p>
						Good job finding the secret modal. There's nothing here right now.
					</p>
					<button class="btn btn-close">okay</button>
				</div>
			</div>
		</div>
	</div>
	<div id="about-modal" class="modal">
		<div class="modal-back">
			<div class="modal-front">
				<div class="modal-content">
					<h1>about</h1>
					<div class="modal-col text-left">
					   <div id="pro-pic"></div>
						<p class="list-description">
                            I am a designer &amp; developer dedicated to creating digital 
							experiences that extend to the human experience. I specialize in:
                        </p>
						<ul class="list">
							<li>Websites, web applications, &amp; Content Management Systems (CMS).
								<ul>
									<li>Semantic HTML, CSS with SASS, &amp; responsive design.</li>
									<li>JavaScript, jQuery, AngularJS, &amp; AJAX.</li>
									<li>Django, Flask, ASP.NET, Ruby on Rails, Spring MVC, &amp; PHP.</li>
									<li>WordPress, Joomla!, &amp; Drupal.</li>
								</ul>
							</li>
							<li>Mobile, desktop, &amp; cloud solutions.
								<ul>
									<li>Python, Java, C#, C++, &amp; SQL.</li>
									<li>PhoneGap, Android, &amp; Windows Phone applications.</li>
									<li>Software as a Service, reporting, file I/O, simulation, &amp; databases.</li>
								</ul>
							</li>
							<li>Games.
								<ul>
									<li>3D design, modeling, texturing, &amp; lighting in Autodesk Maya or Blender.</li>
									<li>Gameplay programming on platforms such as Unreal 4, Unity 3D, Microsoft's XNA with Iridel, or GameMaker: Studio.</li>
									<li>Game programming, concepting, prototyping, level design, testing, &amp; balancing.</li>
								</ul>
							</li>
						</ul>
                        <label class="list-description">See me on:</label>
                        <ul class="list">
                            <li>
                                <a href="https://www.codecademy.com/JHShields" target="_blank" rel="noopener noreferrer">Codecademy</a>
                            </li>
                            <li>
                                <a href="https://github.com/jshields" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                            <li>
                                <a href="http://stackoverflow.com/users/3538313/jhs" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                            </li>
                        </ul>
					</div>
					<button class="btn btn-close">okay</button>
				</div>
			</div>
		</div>
	</div>
	<div id="contact-modal" class="modal">
		<div class="modal-back">
			<div class="modal-front">
				<div class="modal-content">
				<h1>contact</h1>
				<h2 id="phone-number">call me at <a href="tel:5033301909">(503) 330-1909</a></h2>
					<form id="contact-form" method="post" action="contact.php">
						<div class="modal-col">
					    	<label for="email" class="form-label">email address
						    	<input id="email" name="email" type="email" class="form-field" placeholder="foo@example.com" />
							</label>
					    	<label for="name" class="form-label">name
						    	<input id="name" name="name" type="text" class="form-field" placeholder="Firstname Lastname" />
							</label>
							<label for="message" class="form-label">message
								<textarea id="message" name="message" class="form-field" rows="3" placeholder="Hey Josh! ..." spellcheck="true"></textarea>
							</label>
						</div>
						<?php
							session_start();
							if ($_SESSION['cf_return']) {
								echo $_SESSION['cf_return'];
							}
						?>
						<div id="alert alert-info">
                            This message will be sent to <a href="mailto:josh@joshuashields.com">josh@joshuashields.com</a>.
                        </div>
						<div class="alert alert-error alert-sleeping">
                            Message not sent. There doesn't seem to be anything written.
                        </div>
						<!-- not using type submit to avoid forced styling by certain browsers -->
						<input id="btn-submit" type="button" class="btn" value="submit" />
					</form>
					<button class="btn btn-close">cancel</button>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="main">
	<div class="main-col">
		<h1>Joshua Shields</h1>
		<h2>Design &amp; Development:</h2>
		<h2>Web, Apps, Games</h2>
	    <h2><a href="mailto:josh@joshuashields.com" class="wall-link">josh@joshuashields.com</a></h2>
	    <div id="social-media-icons">
	    	<div class="icons-wrap">
		    	<div class="img-link-wrap"><a href="http://www.facebook.com/Josh.H.Shields" class="wall-link" title="Facebook" target="_blank" rel="noopener noreferrer"><img src="images/icons/official_50/facebook_50.png" alt="Facebook"></a></div>
		    	<div class="img-link-wrap"><a href="http://plus.google.com/+JoshShieldsGoogle" class="wall-link" title="Google+" target="_blank" rel="noopener noreferrer"><img src="images/icons/official_50/googleplus_60.png" alt="Google+"></a></div>
	    	</div>
	    	<div class="icons-wrap">
		    	<div class="img-link-wrap"><a href="http://www.twitter.com/JoshHShields" class="wall-link" title="Twitter" target="_blank" rel="noopener noreferrer"><img src="images/icons/official_50/twitter_50.png" alt="Twitter"></a></div>
		    	<div class="img-link-wrap"><a href="https://www.linkedin.com/in/joshua-shields-a6841579" class="wall-link" title="LinkedIn" target="_blank" rel="noopener noreferrer"><img src="images/icons/official_50/linkedin_50.png" alt="LinkedIn"></a></div>
	    	</div>
	    </div>
	</div>
	<a id="btn-about-modal" href="#about-modal" class="btn btn-modal wall-link">about</a>
	<a id="btn-contact-modal" href="#contact-modal" class="btn btn-modal wall-link">contact</a>
	<a id="btn-resume" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/14nzUhhEC5qtAnwvid-yeuFz6cZIF89zFjFziiEB_NrU/edit?usp=sharing" class="btn btn-link wall-link"><!--
    -->r&eacute;sum&eacute; <img src="images/black_rightpointing_triangle.png" alt="&#9654;" /><!--
    --></a>
</section>
<footer>
	<address>
		&copy; Joshua Shields. All Rights Reserved. Contact at: <!--
        --><a href="mailto:josh@joshuashields.com" class="wall-link">josh@joshuashields.com</a>
	</address>
</footer>
<aside id="print-message">
	<h1>Let's Print It!</h1>
	<p>Hello &amp; thank you for your interest in printing my website. Here is the information that I think is most important in the event that someone would want to print my site:</p>
	<ul>
		<li>What I do: Design &amp; develop digital media such as websites, applications, &amp; games.</li>
		<li>My email address: <a href="mailto:josh@joshuashields.com">josh@joshuashields.com</a>, or <a href="mailto:shields.h.josh@gmail.com">shields.h.josh@gmail.com</a>.</li>
		<li>My phone number: (503) 330-1909</li>
	</ul>
</aside>
<script src="js/lib/jquery.min.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
<script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-59566826-2', 'auto');
  ga('send', 'pageview');
</script>
</body>
</html>
