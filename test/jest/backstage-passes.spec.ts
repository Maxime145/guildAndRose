import {Item, GildedRose, ExceptionName} from '@/gilded-rose';

describe('gildedRose - backstage passes', () => {
  it('doit retourner une qualité incrémenté de 1', () => {
    const expected = 41;

    const gildedRose = new GildedRose([new Item(ExceptionName.BACKSTAGE_PASSES, 50, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une qualité incrémenté de 2', () => {
    const expected = 42;

    const gildedRose = new GildedRose([new Item(ExceptionName.BACKSTAGE_PASSES, 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une qualité incrémenté de 3', () => {
    const expected = 43;

    const gildedRose = new GildedRose([new Item(ExceptionName.BACKSTAGE_PASSES, 5, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une qualité de 0 car le concert est terminé', () => {
    const expected = 0;

    const gildedRose = new GildedRose([new Item(ExceptionName.BACKSTAGE_PASSES, 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une date de péremption décrémenté de 1', () => {
    const expected = 9;

    const gildedRose = new GildedRose([new Item(ExceptionName.BACKSTAGE_PASSES, 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(expected);
  });

  it('ne doit retourner une qualité supérieur à 50', () => {
    const expected = 50;

    const gildedRose = new GildedRose([new Item(ExceptionName.BACKSTAGE_PASSES, 50, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });
});
