import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../src/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined'] },
    },
    color: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
    },
  },
} as Meta;

export const Colors = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} color="primary">
        Outlined
      </Button>
    </div>
    <div>
      <Button {...args} color="secondary">
        Filled
      </Button>
    </div>
  </div>
);

Colors.args = {
  variant: 'filled',
};

export const Variants = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
    </div>
    <div>
      <Button {...args} variant="filled">
        Filled
      </Button>
    </div>
  </div>
);

Variants.args = {
  color: 'primary',
};

export const Sizes = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} size="sm">
        Small
      </Button>
    </div>
    <div>
      <Button {...args} size="md">
        Medium
      </Button>
    </div>
    <div>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  </div>
);

Sizes.args = {
  variant: 'filled',
  color: 'primary',
};
