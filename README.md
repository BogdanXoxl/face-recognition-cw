# FACE Recognition coursework

## TODO//::

- [ ] **1. Mobile version:**
<p>Implement a responsive design to create a mobile-friendly version of the application. Ensure that users can seamlessly access and manage their tasks on various mobile devices. This step involves optimizing the layout, styling, and functionality for smaller screens to enhance the overall user experience.</p>
<br/>

- [ ] **2. Bugfix for Canvas: Implement Video Centering and Scaling**
<p>Address the canvas-related issue by introducing functionality to centerize and scale a video within the canvas. This fix aims to ensure that the video is correctly positioned at the center of the canvas while maintaining the desired scaling. (object-position: center;)</p>
<br/>

- [ ] **3. Add Readme Project Description:**
<p>Create a comprehensive README.md file for the project. Include essential information such as project overview, installation instructions, usage guidelines, and any other relevant details. A well-documented README serves as a guide for developers and users, facilitating a smoother onboarding process and promoting collaboration on the project.</p>
<br/>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
