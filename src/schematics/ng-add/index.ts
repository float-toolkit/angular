import { RuleFactory, SchematicsException } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";

import { overwriteRoot, readRoot } from "../utils";
import { Workspace } from "../interfaces";

type Options = {
	project: string;
};

export const ngAdd: RuleFactory<Options> = options => (tree, context) => {
	context.addTask(new NodePackageInstallTask());

	const angularJSONPath = "angular.json";
	const angularJSONBuffer = readRoot(tree, angularJSONPath);
	if (!angularJSONBuffer) throw new SchematicsException(`Cannot find ${angularJSONPath} file`);

	const angularJSON = JSON.parse(angularJSONBuffer.toString()) as Workspace | undefined;
	if (!angularJSON) throw new SchematicsException(`Cannot parse ${angularJSONPath}`);

	const projectName = options.project || angularJSON.defaultProject;
	if (!projectName) throw new SchematicsException("No Angular project specified to add Float Toolkit to");

	const project = angularJSON.projects[projectName];
	if (!project) throw new SchematicsException("Cannot find the specified project in the current workspace");
	if (project.projectType !== "application") throw new SchematicsException("The specified project is not an application");

	const appModulePath = `${project.sourceRoot ?? project.root}/app/app.module.ts`;
	const appModuleBuffer = readRoot(tree, appModulePath);
	if (!appModuleBuffer)
		throw new SchematicsException(`Cannot find main app module (specified path ${appModulePath} does not exist)`);

	const appModule = appModuleBuffer.toString("utf-8");

	if (!appModule.includes("FloatToolkitModule")) {
		overwriteRoot(
			tree,
			appModulePath,
			`import { FloatToolkitModule } from "@float-toolkit/angular";\n${appModule.replace(
				/imports\s*:\s*\[/,
				"imports: [FloatToolkitModule,"
			)}`
		);
	}

	return tree;
};
