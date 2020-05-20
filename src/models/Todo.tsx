export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
  completeDate?: Date;
}

export interface ABCDETodo extends Todo {
  importanceLetter: string; // A, B, C, D, E 중 선택
  importanceNumber: string; // 1부터 시작
}

// a가 b보다 클 경우 +값 반환, a가 b보다 작을 경우 -값 반환, 같을 경우 0 반환
export function compareABCDETodo(a: ABCDETodo, b: ABCDETodo): number {
  
  const letterCompareResult = compareString(a.importanceLetter, b.importanceLetter);
  const numberCompareResult = compareString(a.importanceNumber, b.importanceNumber);

  // letter이 같으면 숫자 비교
  return letterCompareResult === 0 ? numberCompareResult : letterCompareResult;
}

// localeCompare에서는 ""이 가장 작은 값으로 나옴. 이 함수에서는 ""가 가장 큰 값이 되기를 원함
// 즉, 가장 작은 값 = 1 < 2 < 3 < ... < A < B < C < D < E < "" = 가장 큰 값
export const compareString: (a: string, b: string) => number = (a, b) => {
  // 문자가 숫자보다 더 큼. 따라서 문자 중 가장 큰 F를 최대값으로 사용
  // 더 좋은 방법 없나...
  const newA = a === "" ? "F" : a;
  const newB = b === "" ? "F" : b;

  return newA.localeCompare(newB);
}

