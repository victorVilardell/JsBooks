import resultsFormatData from "../../src/utils/resultsFormatData";
import { resultFixture, inputFixture } from "./fixture";

describe("transform data", () => {
  it("tranform data in succes case", async () => {
    let result = resultsFormatData(inputFixture);

    expect(resultFixture).toEqual(result);
  });
});
