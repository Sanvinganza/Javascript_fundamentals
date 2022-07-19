import { WigetFilter } from "../common";

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    expect(1 + 1).toEqual(2);
  });
  it('should have a button "Open Filter" ', function() {
    const component = shallow(<WigetFilter />);
    const button = component.find("button");
    
    expect(button.length).toBe(1);
  })
});