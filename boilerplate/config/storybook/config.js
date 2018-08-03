import { configure } from '@storybook/react';

const context = require.context('../../src/components', true, /.stories.tsx$/); /* creo un contexto de webpack */

function loadStories() {
  context.keys().forEach(filename => context(filename));
}

configure(loadStories, module);
