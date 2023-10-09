export const serializeFormInputElements = <T extends object>(
  inputElements: HTMLFormControlsCollection
) => {
  const formData = {} as T;

  Object.keys(inputElements).forEach((_, index) => {
    const element = inputElements[index] as HTMLInputElement;
    if (element instanceof HTMLInputElement && element?.name)
      formData[element.name as keyof T] = element.value as T[keyof T];
  });

  return formData;
};
