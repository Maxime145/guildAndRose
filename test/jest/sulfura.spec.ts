import {Item, GildedRose, ExceptionName} from '@/gilded-rose';

describe('gildedRose - sulfura', () => {
  it('doit retourner une qualité à 80', () => {
    const expected = 80;

    const gildedRose = new GildedRose([new Item(ExceptionName.SULFURA, 0, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(expected);
  });

  it('doit retourner une date de péremption inchangée', () => {
    const expected = 1;

    const gildedRose = new GildedRose([new Item(ExceptionName.SULFURA, 1, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(expected);
  });
});
