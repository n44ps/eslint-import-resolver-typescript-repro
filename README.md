# This repo is a reproduction using :

- eslint
- eslint-config-airbnb
- @typescript-eslint

- eslint-plugin-import
- eslint-import-resolver-typescript

- eslint-plugin-jsx-a11y
- eslint-plugin-react

I'm trying to use React, Eslint, Typescript, Airbnb Config.
I want to use typescript `paths`, here `@components`.
The problem is that **it works** at the **root** of the project, but **not** using **sub-folders**.
The examples uses the structure of a **monorepo** using `packages` folder.