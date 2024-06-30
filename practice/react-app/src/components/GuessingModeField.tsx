export function GuessingModeField({
  value,
  setValue,
}: {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <label className="flex flex-col">
      Guessing mode
      <input
        className="border h-7 mt-1 indent-2"
        type="checkbox"
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
      />
    </label>
  );
}
