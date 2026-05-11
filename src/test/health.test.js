import healthStatus from '../src/health';

test('health > 50 returns healthy', () => {
  const character = { name: 'Маг', health: 90 };
  expect(healthStatus(character)).toBe('healthy');
});

test('health = 51 returns healthy', () => {
  const character = { name: 'Маг', health: 51 };
  expect(healthStatus(character)).toBe('healthy');
});

test('health = 50 returns wounded', () => {
  const character = { name: 'Маг', health: 50 };
  expect(healthStatus(character)).toBe('wounded');
});

test('health = 30 returns wounded', () => {
  const character = { name: 'Маг', health: 30 };
  expect(healthStatus(character)).toBe('wounded');
});

test('health = 15 returns wounded', () => {
  const character = { name: 'Маг', health: 15 };
  expect(healthStatus(character)).toBe('wounded');
});

test('health = 14 returns critical', () => {
  const character = { name: 'Маг', health: 14 };
  expect(healthStatus(character)).toBe('critical');
});

test('health = 0 returns critical', () => {
  const character = { name: 'Маг', health: 0 };
  expect(healthStatus(character)).toBe('critical');
});