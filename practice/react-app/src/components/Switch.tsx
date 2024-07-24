import { Dispatch, SetStateAction, useId } from 'react';

type Props = {
  label: string
  required?: boolean
  error?: string
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}

export const Switch = ({ label, required = false, error = '', checked, setChecked }: Props) => {
  const errorId = useId();
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label
      className="inline-flex items-center cursor-pointer p-2 rounded-md focus-within:outline-none focus-within:ring-4 focus-within:ring-blue-300 dark:focus-within:ring-blue-800">
      <span className="mr-2">{label}</span>
      <input type="checkbox" checked={checked} role="switch" required={required}
             onChange={handleChange} className="sr-only peer" aria-describedby={errorId} />
      <div
        className="relative w-11 h-6 bg-gray-200  rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      <span className="block text-red-500 py-1" id={errorId} aria-live="polite">
           {error}
          </span>
    </label>
  );
};

