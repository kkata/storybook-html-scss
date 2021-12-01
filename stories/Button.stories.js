import { createButton } from "./Button";

/**
 * 長ーい説明長ーい説明長ーい説明長ーい説明長ーい説明
 *     長ーい説明長ーい説明長ーい説明長ーい説明長ーい説明長ーい説明
 */

export default {
  title: "Example/Button",
  argTypes: {
    label: {
      description: "`label` の `description`",
      table: { defaultValue: { summary: "Button" } },
      control: "text",
    },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  },
  parameters: {
    docs: {
      description: {
        component: "Buttonの説明文",
        story: "`storyDescription` のデフォルト値",
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button ",
};
Secondary.story = {
  parameters: {
    docs: {
      source: {
        code: "Some custom string here",
      },
      description: {
        story: "`Secondary` の `storyDescription` です",
      },
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
