# Wordpress

## wp_enqueue_script()
``` php
wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
```
### Parameters

`$handle`<br>
(string) (Required) Name of the script. Should be unique.

`$src`<br>
(string) (Optional) Full URL of the script, or path of the script relative to the WordPress root directory.

Default value: ''

`$deps`<br>
(string[]) (Optional) An array of registered script handles this script depends on.

Default value: array()

`$ver`<br>
(string|bool|null) (Optional) String specifying script version number, if it has one, which is added to the URL as a query string for cache busting purposes. If version is set to false, a version number is automatically added equal to current installed WordPress version. If set to null, no version is added.

Default value: false

`$in_footer`<br>
(bool) (Optional) Whether to enqueue the script before `</body>` instead of in the `<head>`. Default 'false'.

Default value: false

## get_template_directory_uri()

Return home template directory uri:
```php
<img src="<?php echo get_template_directory_uri(); ?>/images/sample.png">
```