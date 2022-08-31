import serie from './testSerie';

describe('Tests para la funcion serie', () => {
  it('Deberia retornar 14 cuando el valor es 3', () => {
    expect(serie(3)).toBe(14)
  });
  it('Deberia retornar 12 cuando el valor es 4', () => {
    expect(serie(4)).toBe(12)
  });
  it('Deberia retornar 7.5 cuando el valor es 5', () => {
    expect(serie(5)).toBe(7.5)
  });
  it('Deberia retornar 3.6 cuando el valor es 6', () => {
    expect(serie(6)).toBe(3.6666666666666665)
  });
  it('Deberia retornar 1.39 cuando el valor es 8', () => {
    expect(serie(8)).toBe(1.3928571428571428)
  });
  it('Deberia retornar 1 cuando el valor es 9', () => {
    expect(serie(9)).toBe(1)
  });
  it('Deberia retornar 0.71 cuando el valor es 10', () => {
    expect(serie(10)).toBe(0.7142857142857143)
  });
  it('Deberia retornar 0.50 cuando el valor es 11', () => {
    expect(serie(11)).toBe(0.5042016806722689)
  });
  it('Deberia retornar 0.22 cuando el valor es 12', () => {
    expect(serie(12)).toBe(0.22479338842975208)
  });
  it('Deberia retornar 0.13 cuando el valor es 13', () => {
    expect(serie(13)).toBe(0.15628192032686414)
  });
});