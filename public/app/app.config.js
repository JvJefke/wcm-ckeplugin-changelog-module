"use strict";

angular.module("ckeplugin-changelog_0.0.1")
    .config([

	"ckeditorPluginsChangelogProvider",
	"ckeditorProvider",

	function(ckeditorPluginsChangelogProvider) {
		ckeditorPluginsChangelogProvider.controls.registerAll();
	},
]);
