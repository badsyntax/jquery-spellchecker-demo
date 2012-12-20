(function() {
	// Prevent embedding the demos in an iframe
	if (top.location.href !== self.location.href) {
	  top.location.href = self.location.href;
	}
  $('head').append(
    '<link href="http://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel="stylesheet" type="text/css">'
  );
  $('body').append([
    '<a href="https://github.com/badsyntax/jquery-spellchecker" class="github-ribbon">',
    '<img src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub">',
    '</a>'
  ].join(''));
  prettyPrint();
})();
