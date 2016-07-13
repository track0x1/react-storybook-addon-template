import React from 'react';
import _Story from './components/Story';
export const Story = _Story;

const defaultOptions = {
  inline: true,
  header: true,
  source: true,
};

export default {
  addWithTemplate(storyName, ...more) {
    let info;
    let storyFn;
    let _options;

    switch (more.length) {
      case 2:
        // function and options
        if (typeof more[0] === 'function') {
          storyFn = more[0];
          _options = more[1];
        } else {
          // info and function
          info = more[0];
          storyFn = more[1];
        }
        break;
      case 3:
        info = more[0];
        storyFn = more[1];
        _options = more[2];
        break;
      default:
        storyFn = more[0];
    }
    const options = {
      ...defaultOptions,
      ..._options,
    };

    this.add(storyName, (context) => {
      const props = {
        info,
        context,
        showInline: Boolean(options.inline),
        showHeader: Boolean(options.header),
        showSource: Boolean(options.source),
        propTables: options.propTables,
      };

      return (
        <Story {...props}>
          {storyFn(context)}
        </Story>
      );
    });
  },
};
