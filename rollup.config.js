import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'public/js/app.js',
    output: {
        file: 'public/bundle.js',
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