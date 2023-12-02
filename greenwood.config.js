import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';

export default {
  plugins: [
    greenwoodPluginPostCss({
      extendConfig: true
    })
  ],
  prerender: true
};