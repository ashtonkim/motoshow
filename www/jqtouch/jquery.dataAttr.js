/*!
 * HTML5 custom data attributes plugin for jQuery v1.0
 * @link http://github.com/mathiasbynens/HTML5-custom-data-attributes-plugin-for-jQuery
 * @description An easy setter/getter for HTML5 data-* attributes
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
jQuery.fn.dataAttr = function(attr, val) {
	return val ? this.attr('data-' + attr, val) : this.attr('data-' + attr);
};