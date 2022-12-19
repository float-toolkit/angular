/**
 * @param {import("karma").Config} config
 */
module.exports = function (config) {
	config.set({
		basePath: "",
		frameworks: ["jasmine", "@angular-devkit/build-angular"],
		plugins: [
			require("karma-jasmine"),
			require("karma-chrome-launcher"),
			require("karma-jasmine-html-reporter"),
			require("karma-coverage"),

			// @ts-expect-error Does not find module, but compiles
			require("@angular-devkit/build-angular/plugins/karma"),
		],

		client: {
			jasmine: {},
			clearContext: false,
		},
		customLaunchers: {
			ChromeCI: {
				base: "ChromeHeadless",
				flags: ["--no-sandbox", "--disable-gpu"],
			},
		},
		browsers: ["Chrome"],
		jasmineHtmlReporter: {
			suppressAll: true,
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		singleRun: false,
		restartOnFileChange: true,

		coverageReporter: {
			dir: "./coverage",
			subdir: ".",
			reporters: [{ type: "cobertura" }, { type: "lcov" }, { type: "json" }, { type: "text" }],
		},
		reporters: ["progress", "kjhtml"],
	});
};
