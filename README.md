# React-ToDO-List

this project is implemention of ToDO-List with React for Qeura-Bootcamp


## Feature ✨

- Add Your task
- Delet Your Task
- Choose Your Category
- Filter Your Task Based on Category
- Check off your completed tasks.


## Technologies Used 💻

- React Libary 
- TypeScript
- TailwindCss


## Screenshots

<img src="https://github.com/user-attachments/assets/24d062be-69b5-4ce4-8e37-70e94a3d2648" alt="TodoList" width="500"/>

<img src="https://github.com/user-attachments/assets/c07afa01-c0cb-4773-a9df-ec42ccb0f475" alt="TodoList" width="500"/>



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
