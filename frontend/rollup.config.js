import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'js/app.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        globals: {
            page: 'page',
            notyf: 'notyf'
        },
        inlineDynamicImports: true,
        sourcemap: true,
        compact: true
    },
    plugins: [commonjs(), nodeResolve(), terser()]
}