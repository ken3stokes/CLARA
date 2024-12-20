const adjectives = [
  "Swift", "Clever", "Brave", "Wise", "Noble", "Calm", "Bright", "Daring",
  "Eager", "Fair", "Gentle", "Happy", "Jolly", "Kind", "Lively", "Merry",
  "Nice", "Proud", "Quick", "Rich", "Smart", "Tall", "Witty", "Young"
];

const nouns = [
  "Fox", "Eagle", "Wolf", "Bear", "Lion", "Tiger", "Hawk", "Owl", "Falcon",
  "Deer", "Elk", "Moose", "Panda", "Koala", "Sloth", "Otter", "Seal", "Whale",
  "Shark", "Dolphin", "Penguin", "Turtle", "Rabbit", "Squirrel"
];

function getRandomElement(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateUsername(options: {
  useAdjective: boolean;
  useNoun: boolean;
  useNumber: boolean;
}): string {
  let username = "";

  if (options.useAdjective) {
    username += getRandomElement(adjectives);
  }

  if (options.useNoun) {
    username += getRandomElement(nouns);
  }

  if (options.useNumber) {
    username += Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  }

  return username;
}

