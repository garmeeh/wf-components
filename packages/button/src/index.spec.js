import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Button from '.';

describe('Button Component', () => {
  it('renders without props', () => {
    const wrapper = mount(<Button />);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
  });

  it('renders children when passed in', () => {
    const wrapper = mount(
      <Button>
        <p className="child">Some Child</p>
      </Button>
    );

    const child = wrapper.find('.child');
    expect(child.length).toBe(1);
  });

  it('handles onClick events', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} />);

    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
