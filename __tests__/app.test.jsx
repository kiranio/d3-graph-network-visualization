import React from 'react';
import { mount } from 'enzyme';

import App from '../src/App';
import GraphNetwork from '../src/components/graph-network';

describe('<App />', () => {
  const wrap = mount(<App />);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });

  it('contains GraphNetwork component', () => {
    expect(wrap.find(GraphNetwork).exists()).toBe(true);
  });
});
