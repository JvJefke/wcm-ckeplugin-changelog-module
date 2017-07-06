"use-strict";

(function() {
	angular.module("ckeplugin-changelog_0.0.1")
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
