import {Item, GildedRose, ExceptionName} from '@/gilded-rose';

describe('gildedRose - aged brie', () => {
  it('doit retourner une qualité incrémenté de 1', () => {
    const expected = 50;

    const gildedRose = new GildedRose([new Item(ExceptionName.AGE_BRIE, 50, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une qualité incrémenté de 2', () => {
    const expected = 42;

    const gildedRose = new GildedRose([new Item(ExceptionName.AGE_BRIE, 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('ne doit retourner une qualité supérieur à 50', () => {
    const expected = 50;

    const gildedRose = new GildedRose([new Item(ExceptionName.AGE_BRIE, 50, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une date de péremption décrémenté de 1', () => {
    const expected = 9;

    const gildedRose = new GildedRose([new Item(ExceptionName.AGE_BRIE, 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(expected);
  });
});
