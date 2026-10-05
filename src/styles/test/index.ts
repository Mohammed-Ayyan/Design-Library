import { StyleDefinition } from '../../core/types/style-definition';
import { brutalismStyle } from '../brutalism';

// Deprecated temporary test style aliased to brutalism for backwards compatibility
export const testStyle: StyleDefinition = {
  ...brutalismStyle,
  id: 'test',
  name: 'Test Style (Legacy)',
};
