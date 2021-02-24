import { readFileSync } from 'fs';

export abstract class Parser {
  public readonly defaultPath = 'src/core/default-values';

  protected getFile(name: string): string {
    const file = readFileSync(name, { encoding: 'utf-8' });
    return file;
  }
}
