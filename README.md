# typescript-eslint-no-unnecessary-type-assertion-generic-function
https://github.com/typescript-eslint/typescript-eslint/issues/528
## Steps
1. Run `npm install` or `yarn`
2. Run `npm run typecheck` or `yarn typecheck` -> no errors
3. Run `npm run lint` or `yarn lint`
```
D:\Projects\typescript-eslint-no-unnecessary-type-assertion-generic-function\index.ts
  2:12  error  This assertion is unnecessary since it does not change the type of the expression  @typescript-eslint/no-unnecessary-type-assertion

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```
4. Run `npm run fix` or `yarn fix`
5. Run `npm run typecheck` or `yarn typecheck`
```
index.ts:2:19 - error TS2339: Property 'value' does not exist on type 'Element'.

2 const a = (foo()).value;
                    ~~~~~


Found 1 error.
```