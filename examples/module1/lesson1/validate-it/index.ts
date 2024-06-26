import { validate } from '../_solutions/validate-it/validation/validator.ts';
import { NUMBER_VALIDATORS } from '../_solutions/validate-it/validation/methods.ts';


function init() {
  const input = document.querySelector<HTMLInputElement>('input');
  const validateButton = document.querySelector<HTMLButtonElement>('#validation-button');
  const clearInputButton = document.querySelector<HTMLButtonElement>('#clear-button');
  const result = document.querySelector<HTMLDivElement>('#result');
  if(!validateButton || !clearInputButton || !result || !input) return

  validateButton.addEventListener('click', () => {
    result.innerHTML = validate(input.value, NUMBER_VALIDATORS);
  });

  clearInputButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

init();
