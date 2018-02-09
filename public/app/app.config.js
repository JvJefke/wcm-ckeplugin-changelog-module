"use strict";

angular.module("ckeplugin-changelog_0.2.0")
    .config([

	"ckeditorPluginsChangelogProvider",
	"ckeditorProvider",

	function(ckeditorPluginsChangelogProvider) {
		ckeditorPluginsChangelogProvider.controls.registerAll();
	},
]);
