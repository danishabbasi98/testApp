import React from 'react'

import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Dashboard from '../Dashboard'
import App from '../App'

Enzyme.configure({ adapter: new Adapter() })
// describe(' fetch test : ',()=>{
//     test('should retrun correct', () => {
//     const todo = fetchData(15);
//     console.log("Result ."+todo)
//     expect(todo).toBe('')
//     });
// });
let wrapper;
beforeEach(()=>{
    wrapper = mount(<Dashboard/>);
})
describe(' Simple app test : ',()=>{
        test('render the title ', () => {
        const wrapper = shallow(<App/>);
        console.log("Wrapper "+wrapper.debug())
        expect(wrapper.find("h1").text()).toContain("HelloApp")
    });
});

describe(' Simple Dashboard test : ',()=>{
    test('render the title ', () => {  
    console.log("Wrapper "+wrapper.debug())
    expect(wrapper.find("h2").text()).toContain("All Students List")
});
});
test('mock implementation', () => {
  const mock = jest.fn(() => "I am mock function");
//   console.log(mock);//to show the related function
});

test("component Lifecycle test", () => {
    const wrapper = mount(<Dashboard />)
    const spy = jest.spyOn(wrapper.instance(), "componentDidMount")
    expect(spy).toHaveBeenCalledTimes(0)
  }) 

  