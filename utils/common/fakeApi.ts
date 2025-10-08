export const fakeApi = (...rest: any[]) =>
  new Promise((res, rej) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        res({ result: { ok: true } });
        return;
      }
      rej({ message: 'server error' });
    }, random * 1);
  });
