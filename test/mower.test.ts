import mower from '../src/mower';
describe('MowItNow', () => {
  test('should initialise and return the mower position q4', () => {
    expect(mower({ x: 1, y: 2, o: "N"}, "MM")).toBe("14N");
  });

  test('q5', () => {
    expect(mower({ x:1, y:2, o:"N"}, "RRR")).toBe("12W");
  });

  test('q6', () => {
    expect(mower({ x:1, y:2, o:"N"}, "LLL")).toBe("12E");
  });

  test('q7', () => {
    expect(mower({ x:1, y:2, o:"N"}, "MRMRMRMR")).toBe("12N");
  });
  
  test('q8', () => {
    expect(mower({ x:1, y:2, o:"N"}, "LMMLMMM")).toBe("00S");
  });

  test('q9', () => {
    expect(mower({ x:1, y:2, o:"N"}, "LLMMMRRRRRMMRMMMRMLM")).toBe("14N");
  });
}