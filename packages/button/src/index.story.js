import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'helper-wf-theme';

import Button from './';

const stories = storiesOf('Button', module);

stories
  .add('Button', () => <Button onClick={action('clicked')}>Button</Button>)
  .add('Button with Theme Provider', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Button</Button>
    </ThemeProvider>
  ));
