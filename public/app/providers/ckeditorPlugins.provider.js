"use strict";

(function() {
	angular.module("ckeplugin-changelog_0.2.0")
		.provider("ckeditorPluginsChangelog", [

			"$provide",

			function ckeditorPluginsChangelogProvider($provide) {

				var registerAll = function registerAll() {
					$provide.decorator("ckeditorService", [

						"$delegate",
						"ckeditorPluginDefinitionsChangelog",

						function(ckeditorService, ckeditorPluginDefinitionsChangelog) {
							_.forEach(ckeditorPluginDefinitionsChangelog, function(plugin, name) {
								ckeditorService.activatePlugin(name, plugin.plugin, plugin.meta);
							});

							return ckeditorService;
						},
					]);
				};

				this.controls = {
					registerAll: registerAll,
				};

				this.$get = function get() {
					return this.controls;
				};

			},
		]);
})();
