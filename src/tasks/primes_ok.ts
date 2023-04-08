// 👓 https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/tasks

export function getPrimeFactors(nmbr: number): number[] {
  const SMALLEST_PRIME = 2;
  const NULL_REMAINDER = 0;
  const primeFactors = [];
  let testingFactor = SMALLEST_PRIME;
  while (nmbr >= SMALLEST_PRIME) {
    if (nmbr % testingFactor === NULL_REMAINDER) {
      primeFactors.push(testingFactor);
      nmbr /= testingFactor;
    } else {
      testingFactor++;
    }
  }
  return primeFactors;
}
