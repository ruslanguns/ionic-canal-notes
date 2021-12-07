/* eslint-disable @typescript-eslint/naming-convention */

export interface Idea {
  tags: string[];
  description: string;
  title: string;
  updatedAt: Date;
  cover: string;
  createdAt: Date;
  id: string;
}

export const ideaTags = {
  'My idea': {
    content: 'My idea',
    color: 'tertiary',
  },
  Featured: {
    content: 'Featured',
    color: 'danger',
  },
  New: {
    content: 'New',
    color: 'warning',
  },
};
