<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"
  <?php print $rdf_namespaces; ?>>

<head profile="<?php print $grddl_profile; ?>">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,700|Crimson+Text:400,400italic' rel='stylesheet' type='text/css'>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php print $styles; ?>
  <?php print $scripts; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id="skip">
    <a href="#main-menu"><?php print t('Jump to Navigation'); ?></a>
  </div>
  <div id="ie-warning">
    <h2>Browser Upgrade</h2>
    <p>Hello. It looks like you are using an older internet browser. For the best user experience we suggest upgrading to a more modern browser.</p>
    <a href="http://browsehappy.com/" target="_blank">Click here for some good options</a>
    <a href="#" id="close-warning">Click here to continue with this browser</a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
