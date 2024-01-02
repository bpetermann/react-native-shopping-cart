
export function hashValue(value: string, time: number) {
    return (
      +value
        .split('')
        .map((item) => item.charCodeAt(0))
        .join('') * time
    ).toString();
  }
  