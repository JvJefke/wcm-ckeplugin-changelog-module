"use strict";

angular.module("ckeplugin-changelog_0.2.0")
	.provider("CKEditorConfigChangelog", [
		"MODULE_ENV_CONFIG",

		function membersConfig(MODULE_ENV_CONFIG) {
			this.API = {
				name: MODULE_ENV_CONFIG.angularModule,
				version: "0.2.0",
				feDirPath: MODULE_ENV_CONFIG.feDirPath,
				assetsDirPath: MODULE_ENV_CONFIG.assetsDirPath,
				cssDirPath: MODULE_ENV_CONFIG.cssDirPath,
			};

			this.API.moduleVersionName = this.API.name + "_" + this.API.version;
			this.API.modulePath = this.API.feDirPath;

			this.$get = function get() {
				return this.API;
			};
		},
	]);
