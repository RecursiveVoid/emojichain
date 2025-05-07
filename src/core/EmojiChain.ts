const emojiMap = {
  smilingFace: '😊',
  ghost: '👻',
  skull: '💀',
  thumbsUp: '👍',
  fire: '🔥',
  rocket: '🚀',
  heart: '❤️',
} as const;

type EmojiMethods = {
  [K in keyof typeof emojiMap]: () => EmojiMethods & string;
};

export function createEmojiChain(chain = ''): EmojiMethods {
  return new Proxy({} as EmojiMethods, {
    get(_, prop) {
      if (prop === Symbol.toPrimitive) {
        return () => chain;
      }
      if (typeof prop === 'string' && emojiMap[prop as keyof typeof emojiMap]) {
        return () =>
          createEmojiChain(chain + emojiMap[prop as keyof typeof emojiMap]);
      }
      throw new Error(`Unknown emoji: ${String(prop)}`);
    },
  });
}



