import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adiciona uma nova tarefa', () => {
  render(<App />);
  
  const input = screen.getByPlaceholderText('Nova tarefa');
  const button = screen.getByText('Adicionar');

  fireEvent.change(input, { target: { value: 'Estudar DevOps' } });
  fireEvent.click(button);

  expect(screen.getByText('Estudar DevOps')).toBeInTheDocument();
});