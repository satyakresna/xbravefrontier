import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: 'public/js/app.js',
    output: {
        file: 'public/dist/bundle.js',
        format: 'iife',
        globals: {
            page: 'page',
            notyf: 'notyf'
        },
        inlineDynamicImports: true,
        sourcemap: true,
        compact: true
    },
    plugins: [nodeResolve(), terser()]
}