export function createArrayOfEmptyItems(amountOfItems: number): any[] {
  return Array(amountOfItems).fill({ item: null });
}
