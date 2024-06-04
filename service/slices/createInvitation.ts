export const createNote = (data: any) => {
  return {
    url: 'api/app/add-note',
    method: 'POST',
    body: data,
  };
};
