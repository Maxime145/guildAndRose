import {GildedRose, Item} from '@/gilded-rose';

describe('gildedRose - produit classique', () => {
  it('doit retourner une qualité décrémenté de 1', () => {
    const expected = 39;

    const gildedRose = new GildedRose([new Item("yogourt", 50, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une qualité décrémenté de 2', () => {
    const expected = 38;

    const gildedRose = new GildedRose([new Item("yogourt", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('ne doit pas retourner une qualité inférieur à 0', () => {
    const expected = 0;

    const gildedRose = new GildedRose([new Item("yogourt", 50, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une date de péremption décrémenté de 1', () => {
    const expected = 49;

    const gildedRose = new GildedRose([new Item("yogourt", 50, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(expected);
  });
});
