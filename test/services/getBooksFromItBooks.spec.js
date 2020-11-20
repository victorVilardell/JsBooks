import getBooksFromItBooks from "../../src/services/getBooksFromItBooks";

describe("recover book from itBooks", () => {
  it("method is called and the correct arguments", async () => {
    let mockFetcher = { get: jest.fn() };
    let expectedUrl = `https://api.itbook.store/1.0/search/javascript`;

    await getBooksFromItBooks(mockFetcher, "javascript");

    expect(mockFetcher.get.mock.calls[0][0]).toEqual(expectedUrl);
    expect(mockFetcher.get).toHaveBeenCalled();
  });
});
