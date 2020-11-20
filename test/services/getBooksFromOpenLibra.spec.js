import getBooksFromOpenLibra from "../../src/services/getBooksFromOpenLibra";

describe("recover book from OpenLibra", () => {
  it("method is called and the correct arguments", async () => {
    let mockFetcher = { get: jest.fn() };
    let expectedUrl = `https://www.etnassoft.com/api/v1/get/?keyword=javascript`;

    await getBooksFromOpenLibra("javascript", mockFetcher);

    expect(mockFetcher.get.mock.calls[0][0]).toEqual(expectedUrl);
    expect(mockFetcher.get).toHaveBeenCalled();
  });
});
