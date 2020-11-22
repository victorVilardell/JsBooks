import bookMapper from "../../src/utils/bookMapper";
import { inputData, outputData } from "./fixture";

describe("transform data", () => {
  it("tranform format data", () => {
    let result = bookMapper(inputData);

    expect(outputData).toEqual(result);
  });
});
