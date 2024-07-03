// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { test, expect, describe, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '@/components/TodoList.tsx';
import { screen } from '@testing-library/dom';

afterEach(cleanup);

describe('TodoList', () => {
  test('should add todo on add button click', async () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    await userEvent.type(input, 'First todo');
    await userEvent.click(addButton);
    const todo = screen.getByText('First todo');
    expect(todo).toBeInTheDocument();
  });

  test('should remove todo on remove button click', async () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    await userEvent.type(input, 'First todo');
    await userEvent.click(addButton);
    const removeButton = screen.getByLabelText('remove-btn');
    await userEvent.click(removeButton);
    const todo = screen.queryByText('First todo');
    expect(todo).toBeNull();
  });

  test('should remove todos on remove button click clear all button', async () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    await userEvent.type(input, 'First todo');
    await userEvent.click(addButton);
    await userEvent.type(input, 'Second todo');
    await userEvent.click(addButton);

    const clearAllButton = screen.getByText('Clear All');
    await userEvent.click(clearAllButton)
    const firstTodo = screen.queryByText('First todo');
    const secondTodo = screen.queryByText('Second todo');

    expect(firstTodo).toBeNull();
    expect(secondTodo).toBeNull();
  });

});