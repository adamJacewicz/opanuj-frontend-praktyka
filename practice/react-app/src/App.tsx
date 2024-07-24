import { Switch } from './components/Switch.tsx';
import { FormEvent, useRef, useState } from 'react';

const specialCharactersRegex = /\W+/g;

const hasSpecialCharacters = (value: string) => specialCharactersRegex.test(value);

const ERROR_MESSAGES = {
  name: 'Error: Pole imię nie może zawierać znaków specjalnych',
  surname: 'Error: Pole nazwisko nie może zawierać znaków specjalnych',
  email: 'Error: Pole email jest wymagane',
  dataProcessing: 'Error: To pole jest wymagane',
};

const initialErrors = {
  name: '',
  surname: '',
  email: '',
  dataProcessing: '',
}

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [dataProcessing, setDataProcessing] = useState(false);

  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => {
    setErrors(initialErrors)
  }

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetErrors()
    if(hasSpecialCharacters(name)) {
      setErrors((prev) => ({...prev, name: ERROR_MESSAGES.name}))
    }
    if(hasSpecialCharacters(surname)) {
      setErrors((prev) => ({...prev, surname: ERROR_MESSAGES.surname}))
      return
    }
    console.log({name, surname, email,dataProcessing});
  };

  return (
    <main className="bg-slate-500 h-dvh flex">
      <form onSubmit={onSubmit} ref={formRef} className="max-w-md bg-white rounded m-2 h-fit">
        <label className="block p-2 ">
          <span className="mr-2">Imię: (wymagane)</span>
          <input onChange={(e) => setName(e.target.value)}
                 className="rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                 aria-describedby="name-validation" required minLength={1} type="text" />
          <span className="block text-red-500 py-1" id="name-validation" aria-live="polite">
           {errors.name}
          </span>
        </label>
        <label className="block p-2">
          <span className="mr-2">Nazwisko: (wymagane)</span>
          <input onChange={(e) => setSurname(e.target.value)} minLength={1}
                 className="rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                 aria-describedby="surname-validation" required type="text" />
          <span className="block text-red-500 py-1" id="surname-validation" aria-live="polite">
           {errors.surname}
          </span>
        </label>
        <label className="block p-2">
          <span className="mr-2">Email: (wymagane)</span>
          <input onChange={(e) => setEmail(e.target.value)}
                 className="rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                 aria-describedby="email-validation" required type="email" />
          <span className="block text-red-500 py-1" id="email-validation" aria-live="polite">
           {errors.email}
          </span>
        </label>
        <Switch setChecked={setDataProcessing} checked={dataProcessing} label="Zgoda na przetwarzanie danych osobowych"
                error={errors.dataProcessing} required />
        <button className="bg-white w-full font-medium p-1 rounded mt-2 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800" type="submit">Wyślij</button>
      </form>


    </main>
  );
}

export default App;
