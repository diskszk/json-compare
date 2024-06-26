import { BehaviorSubject } from "rxjs";
import { loadingSubject$ } from "../model";
import { Textarea, Text } from "@chakra-ui/react";
export function InputForm({
  inputSubject$,
  error,
}: {
  inputSubject$: BehaviorSubject<string>;
  error: Error | null;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    loadingSubject$.next(true);
    inputSubject$.next(event.target.value);
  };

  return (
    <div>
      <Textarea
        width="600px"
        resize="none"
        rows={10}
        onChange={handleChange}
      ></Textarea>
      {error && (
        <Text fontSize="sm" color="red.500">
          {error.message}
        </Text>
      )}
    </div>
  );
}
