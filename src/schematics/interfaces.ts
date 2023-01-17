export interface WorkspaceProject {
	root: string;
	sourceRoot?: string;
	projectType?: "application" | "library";
	architect?: Record<
		string,
		{
			builder: string;
			options?: Record<string, any>;
			configurations?: Record<string, Record<string, any>>;
			defaultConfiguration?: string;
		}
	>;
}

export interface Workspace {
	defaultProject?: string;
	projects: Record<string, WorkspaceProject>;
}
