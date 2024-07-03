// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(3);
    container.querySelectorAll('li').forEach((el, i) => {
      expect(el.textContent).toContain(`${users[i].role === 'admin' && '(Admin)'} Name: ${users[i].name}, Age: ${users[i].age}`)
    })
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(2);
    const filteredUsers = users.filter(user => user.role !== 'admin')
    container.querySelectorAll('li').forEach((el, i) => {
      expect(el.textContent).toContain(`Name: ${filteredUsers[i].name}, Age: ${filteredUsers[i].age}`)
    })
  });
});
