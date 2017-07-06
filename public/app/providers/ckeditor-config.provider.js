"use strict";

angular.module("ckeplugin-changelog_0.0.1")
    .provider("CKEditorConfigChangelog", [
	function membersConfig() {

		this.API = {
			name: "ckeplugin-changelog",
			version: "0.0.1",
			basePath: "app/modules/",
			assetsBasePath: "/assets/modules/",
		};

		this.API.moduleVersionName = this.API.name + "_" + this.API.version;
		this.API.modulePath = this.API.basePath + this.API.moduleVersionName + "/";
		this.API.assetsPath = this.API.assetsBasePath + this.API.moduleVersionName + "/";

		this.$get = function get() {
			return this.API;
		};
	},
]);
