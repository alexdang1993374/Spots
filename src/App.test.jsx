import React from 'react';
import ReactDOM from 'react-dom';
import {spy} from 'sinon';
import { expect } from 'chai';
import { mount, shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";
import Search from './components/Search';
import Map from "./components/Map";

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders a <Map /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Map)).to.have.lengthOf(1);
    });

    it('renders the logo', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-logo')).to.have.lengthOf(1);
    });

    it('renders a <Search /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Search)).to.have.lengthOf(1);
      });
});
