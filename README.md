# import-meta-url

This project demonstrates `import.meta.url`, which is supported in TypeScript as of version 2.9.x: https://github.com/Microsoft/TypeScript/pull/23327.

## Compiling TypeScript

```Bash
npm run build
```

## Running Prettier

```
npm run prettier
```

**WARNING**: Prettier fails to execute with the following error:
```
[error] index.ts: SyntaxError: Argument expression expected. (6:13)
[error]   4 |   }
[error]   5 | }
[error] > 6 | console.log(import.meta.url);
[error]     |    
```

