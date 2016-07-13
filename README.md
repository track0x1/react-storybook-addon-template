# React Storybook Template Addon

A React Storybook addon to show additional information for your stories and template them.

### Usage

Install the following npm module:

```sh
npm i --save react-storybook-addon-template
```

Then set the addon in the place you configure storybook like this:

```js
import React from 'react';
import { configure, setAddon } from '@kadira/storybook';
import templateAddon from 'react-storybook-addon-template';

setAddon(templateAddon);

configure(function () {
  ...
}, module);
```

Then create your stories with the `.addWithTemplate` API.

```js
import React from 'react';
import Button from './Button';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button')
  .addWithTemplate(
    'simple usage', () => (
      <div>
        <Button label="The Button" onClick={action('onClick')}/>
        <br />
        <p>
          Click the "?" mark at top-right to view the info.
        </p>
      </div>
    ),
  );
```

> Have a look at [this example](example/story.js) stories to learn more about the `addWithTemplate` API.

### Template Classes

With the Storybook Template addon, you are provided the flexibility of targeting different classes to style your stories however you would like. To do this, you would add a custom CSS file in your main storybook config:
```
import { configure, setAddon } from '@kadira/storybook';
import templateAddon from 'react-storybook-addon-template';
import './base.scss';
...
```

And then in `base.scss` you can target the following classes:
+ `storybook-template` - The entire Storybook template
+ `storybook-template__story-header` - Story header (typically component name)
+ `storybook-template__story` - A wrapper for the rendered component
+ `storybook-template__story-info` - Story Info (a wrapper section)
  + `storybook-template__story-info-content` - Content section of 'Story Info'
  + `storybook-template__story-info-source` - Source code section of 'Story Info'
  + `storybook-template__story-info-props` - Props section of 'Story Info'
