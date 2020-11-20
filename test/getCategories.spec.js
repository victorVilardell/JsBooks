import getCategories from "../src/services/getCategories";

describe("recover book categories", () => {
  it("method is called and the correct argument", async () => {
    let mockFetcher = { get: jest.fn() };
    let expectedUrl =
      "https://www.etnassoft.com/api/v1/get/?get_categories=all";

    await getCategories(mockFetcher);

    expect(mockFetcher.get.mock.calls[0][0]).toEqual(expectedUrl);
    expect(mockFetcher.get).toHaveBeenCalled();
  });
});
