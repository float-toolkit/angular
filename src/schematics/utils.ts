import { Tree } from "@angular-devkit/schematics";

const root = (path: string): string => `/${path}`;

export const readRoot = (tree: Tree, path: string): Buffer | null => tree.read(root(path));
export const overwriteRoot = (tree: Tree, path: string, content: string): void => tree.overwrite(root(path), content);
