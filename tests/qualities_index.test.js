import React from "react";
import { shallow } from "enzyme";
import QualIndex from "./../app/javascript/components/qualities_index.js";
import QualIndexItem from "./../app/javascript/components/qualities_index_item.js";

//why all these arrow functions?

describe("QualIndex", () => {
  let container = shallow(<QualIndex />);
  it("begins unsorted", () => {
    let sortedName = container.state().sortByName;
    expect(sortedName).to.equal(false);
  });
});
