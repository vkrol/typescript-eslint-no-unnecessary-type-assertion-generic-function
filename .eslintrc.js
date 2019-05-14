module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
	}
};
