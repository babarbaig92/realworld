import { Sidebar } from '.';

const meta = {
  component: Sidebar,
};

export default meta;

export const WithoutTags = {};

export const WithTags = {};

WithTags.args = {
  popularTags: [
    { id: '1', name: 'react' },
    { id: '2', name: 'rails' },
  ],
};

export const WithActiveTag = {
  args: {
    popularTags: [
      { id: '1', name: 'react' },
      { id: '2', name: 'rails' },
    ],
  },
  parameters: {
    nextRouter: {
      query: { tagName: 'react' },
    },
  },
};
