export type numberWithEmptyString = number | "";

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
  completeDate?: Date;
}

export interface ABCDETodo extends Todo {
  importanceLetter: string; // A, B, C, D, E 중 선택
  importanceNumber: numberWithEmptyString; // 1부터 시작
}

// a가 b보다 클 경우 +값 반환, a가 b보다 작을 경우 -값 반환, 같을 경우 0 반환
export function compareABCDETodo(a: ABCDETodo, b: ABCDETodo): number {
  
  const letterCompareResult = compareString(a.importanceLetter, b.importanceLetter);
  const numberCompareResult = compareNumberWithEmptyString(
    a.importanceNumber,
    b.importanceNumber
  );

  // letter이 같으면 숫자 비교
  return letterCompareResult === 0 ? numberCompareResult : letterCompareResult;
}

// 가장 작은 값 = A < B < C < D < E < "" = 가장 큰 값
export const compareString: (a: string, b: string) => number = (a, b) => {
  const newA = a === "" ? "F" : a;
  const newB = b === "" ? "F" : b;

  return newA.localeCompare(newB);
}

// a가 클 경우 + 값 반환. ""는 가장 큰 값(제일 하단에 표시되어야 함)
export const compareNumberWithEmptyString: (
  a: numberWithEmptyString,
  b: numberWithEmptyString
) => number = (a, b) => {
  if (a === "" && b === "") {
    return 0;
  }

  const newA = a === "" ? Infinity : a;
  const newB = b === "" ? Infinity : b;

  return newA - newB;
};
