import emoji from '../src/index';

describe('EmojiChain', () => {
  it('returns single emoji', () => {
    expect(`${emoji.smilingFace()}`).toBe('😊');
  });

  it('chains multiple emojis correctly', () => {
    expect(`${emoji.fire().rocket().thumbsUp()}`).toBe('🔥🚀👍');
  });

  it('handles independent chains', () => {
    const chain1 = emoji.ghost().skull();
    const chain2 = emoji.smilingFace().heart();
    expect(`${chain1}`).toBe('👻💀');
    expect(`${chain2}`).toBe('😊❤️');
  });

  it('can be used in template strings', () => {
    const result = `My favorite: ${emoji.rocket().fire()}`;
    expect(result).toBe('My favorite: 🚀🔥');
  });

  it('throws on unknown emoji method', () => {
    expect(() => (emoji as any).notARealEmoji()).toThrow('Unknown emoji: notARealEmoji');
  });
});
