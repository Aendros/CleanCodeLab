// ❌
export class HammingCalculator {
  getDistance(a: string, b: string): number {
    this.checkGuards(a, b);
    this.writeInfo(`Calculating difference for ${a} - ${b}`);
    const distance = this.calculateDistance(a, b);
    this.writeInfo(`Calculated difference ${distance}`);
    return distance;
  }

  private calculateDistance(a: string, b: string): number {
    let distance = 0;
    if (this.isEmpty(a)) {
      return distance;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        distance++;
      }
    }
    return distance;
  }

  private checkGuards(a: string, b: string): void {
    if (this.areNullInputs(a, b)) {
      const errorNull = 'null not allowed';
      this.writeError(errorNull);
      throw errorNull;
    }
    if (this.haveDifferentLength(a, b)) {
      const warnInvalid = 'invalid strings';
      this.writeWarning(warnInvalid);
      throw warnInvalid;
    }
  }

  private areNullInputs(source: string, target: string): boolean {
    return source === null || target === null;
  }

  private haveDifferentLength(source: string, target: string): boolean {
    return source.length !== target.length;
  }

  private isEmpty(soruce: string): boolean {
    const EMPTY = 0;
    return soruce.length === EMPTY;
  }

  private writeInfo(message: string): void {
    console.log(message);
  }

  private writeWarning(mesage: string): void {
    console.warn(mesage);
  }

  private writeError(message: string): void {
    console.error(message);
  }
}
