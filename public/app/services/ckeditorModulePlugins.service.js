"use-strict";

(function() {
	angular.module("ckeplugin-changelog_0.2.0")
		.service("ckeditorPluginDefinitionsChangelog", [

			"CKEditorConfigChangelog",
			"ckeditorPluginChangelog",

			function ckeditorPluginDefinitionsChangelog(
				CKEditorConfigChangelog,
				ckeditorPluginChangelog
			) {
				var plugins = {};

				plugins.changelog = ckeditorPluginChangelog;

				return plugins;
			},
		]);
})();
