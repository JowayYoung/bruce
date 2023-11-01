type FrameEnum = "js" | "react";
type ModeEnum = "dev" | "pre" | "prod" | "test";
type StyleEnum = "less" | "scss";
type TagType = Record<string, string | boolean>;
interface FileType {
    from: string;
    to: string;
}
interface BrucercType {
    alias: Record<string, string>;
    browsers: string[];
    buildError: (({ dist, mode }: {
        dist: string;
        mode: ModeEnum;
    }) => void | Promise<void>) | null;
    buildSuccess: (({ dist, mode }: {
        dist: string;
        mode: ModeEnum;
    }) => void | Promise<void>) | null;
    copyFiles: FileType[] | ((mode: ModeEnum) => FileType[]);
    eslintIgnores: string[];
    eslintRules: Record<string, unknown>;
    frame: FrameEnum;
    linkAssets: TagType[] | ((mode: ModeEnum) => TagType[]);
    openPages: string[];
    proxy: Record<string, {
        changeOrigin: boolean;
        secure: boolean;
        target: string;
    }>;
    proxyHost: string;
    publicPath: string | ((mode: ModeEnum) => string);
    scriptAssets: TagType[] | ((mode: ModeEnum) => TagType[]);
    style: StyleEnum;
    stylelintIgnores: string[];
    stylelintRules: Record<string, unknown>;
    transpileDeps: string[];
    useTs: boolean;
}
declare function defineConfig(opts: BrucercType): BrucercType;

export { defineConfig };
