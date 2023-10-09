export const bulkTransformHyphenToCapital = <T extends object>(data: T): T => {
  const updatedData = {} as T;

  Object.keys(data).forEach((key) => {
    const capitalKey = key
      .toLowerCase()
      .replace(/([-][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('', ''));

    updatedData[capitalKey as keyof T] = data[key as keyof T];
  });

  return updatedData;
};

export const transformHyphenToCapital = (hypenWord: string) =>
  hypenWord
    .toLowerCase()
    .replace(/([_][a-z])/g, (group) => group.toUpperCase().replace('_', '').replace('', ''));
