import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

import fs from "fs/promises";

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		loader: "jsx",
		include: /src\/.*\.jsx?$/,
		exclude: [],
	},
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				{
					name: "load-js-files-as-jsx",
					setup(build) {
						build.onLoad(
							{ filter: /src\/.*\.js$/ },
							async args => ({
								loader: "jsx",
								contents: await fs.readFile(args.path, "utf8"),
							})
						);
					},
				},
			],
		},
	},
	plugins: [reactRefresh(), svgr()],
});
