import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {withActiveItem} from './with-active-item.jsx';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem test`, () => {

  it(`Should change activeItem when call onClick`, () => {
    const component = shallow(<MockComponentWrapped />);
    component.props().onClick(`test`);
    expect(component.state(`activeItem`)).toEqual(`test`);
  });

  it(`Should change activeItem when call onMouseEnter after 1 second`, () => {
    const component = shallow(<MockComponentWrapped />);
    component.props().onMouseEnter(`test`);
    expect(component.state(`activeItem`)).toEqual(false);
    setTimeout(() => {
      expect(component.state(`activeItem`)).toEqual(`test`);
    }, 1000);
  });

  it(`Should change activeItem when call onMouseOut`, () => {
    const component = shallow(<MockComponentWrapped />);
    component.props().onMouseOut();
    expect(component.state(`activeItem`)).toEqual(false);
  });

});
