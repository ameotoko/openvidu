module.exports = {
    lib: [
        "lib.dom.d.ts",
        "lib.es5.d.ts",
        "lib.es2015.promise.d.ts",
        "lib.scripthost.d.ts"
    ],
    mode: "file",
    module: "commonjs",
    name: "OpenVidu Node Client V2 Compatibility",
    target: "es5",
    externalPattern: "node_modules",
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    excludeNotExported: true,
    theme: "default",
    readme: "none",
    includeVersion: true,
    listInvalidSymbolLinks: true,
    out: "./docs"
}