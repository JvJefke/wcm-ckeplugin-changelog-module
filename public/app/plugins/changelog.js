"use-strict";

(function(CKEDITOR) {
	angular.module("ckeplugin-changelog_0.0.1")
		.factory("ckeditorPluginChangelog", [

			"CKEditorConfigChangelog",
			"DialogService",

			function ckeditorPluginChangelog(
				CKEditorConfigChangelog,
				DialogService
			) {
				return {
					meta: {
						toolbar: [{
							name: "insert",
							items: ["changelog"],
						}],
						extraPlugins: "changelog",
					},
					plugin: {
						init: function(editor) {
							var updateWidget = function(entries, container) {
								if (!entries.length) {
									return;
								}

								container.setHtml(entries.map(function(entry) {
									return "<p class=\"wcm-changelog__entry\" data-status=\"" + entry.status + "\"><span class=\"wcm-changelog__status wcm-changelog__status--" + entry.status + "\">" + entry.status + "</span><span class=\"wcm-changelog__message\">" + entry.message + "</span></p>";
								}).join(""));
							};

							editor.widgets.add("changelog", {
								template: [
									"<div class=\"wcm-changelog\">",
										"<div class=\"wcm-changelog__entries\">", // eslint-disable-line
											"<p class=\"wcm-changelog__entry\" data-placeholder=\"true\">No entries yet</p>", // eslint-disable-line
										"</div>", // eslint-disable-line
									"</div>",
								].join(""),
								upcast: function(el) {
									return el.name === "div" && el.hasClass("wcm-changelog");
								},
								downcast: function() {
									updateWidget(this.data.entries, this.element.getChild(0));
								},
								init: function() {
									var widget = this;
									var data = {
										entries: [],
									};
									var newData = null;
									var entries = widget.element.getChild(0).getChildren();

									for (var i = 0; i < entries.count(); i += 1) {
										var entry = entries.getItem(i);

										if (entry.getAttribute("data-placeholder")) {
											continue;
										}

										data.entries.push({
											status: entry.getAttribute("data-status"),
											message: entry.getChild(1).getText(),
										});
									}

									widget.setData("entries", data.entries);

									widget.on("edit", function() {
										newData = angular.copy(widget.data);
										DialogService.openModal({
											templateUrl: CKEditorConfigChangelog.modulePath + "templates/changelogModal.tpl.html",
											data: newData,
											controller: ["$scope", function($scope) {
												$scope.statuses = ["added", "changed", "deprecated", "removed", "fixed", "security"];

												$scope.addEntry = function() {
													$scope.ngDialogData.entries.push({
														status: "added",
														message: "New entry",
													});
												};

												$scope.removeEntry = function(index) {
													$scope.ngDialogData.entries.splice(index, 1);
												};
											}],
											appendClassName: "ngdialog--lg",
										}).then(function() {
											widget.setData("entries", newData.entries);
											updateWidget(newData.entries, widget.element.getChild(0));
											editor.fire("change");
										});
									});
								},
							});

							editor.ui.addButton("changelog", {
								label: "Add a changelog",
								command: "changelog",
								toolbar: "insert",
								icon: "/assets/modules/" + CKEditorConfigChangelog.name + "_" + CKEditorConfigChangelog.version + "/img/changelog.png",
								hidpi: true,
							});

							editor.addContentsCss("/assets/modules/" + CKEditorConfigChangelog.name + "_" + CKEditorConfigChangelog.version + "/css/style.css");
						},
					},
				};
			},
		]);
})(window.CKEDITOR);
