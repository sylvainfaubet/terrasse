import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {

  public saveAsJson(data, name = ''): void {
    const properties = { type: 'application/json' };
    const blob = new Blob([JSON.stringify(data)], properties);

    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = data.name || name;
    a.click();
  }

  public async getFromJson(): Promise<object> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';

      interface HTMLInputEvent extends Event {
        target: HTMLInputElement & EventTarget;
      }

      input.onchange = (e: HTMLInputEvent): void => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = (): void => {
          const data = JSON.parse(fileReader.result.toString());
          if (!data.name) {
            data.name = file.name.split('.')[0];
          }
          resolve(data);
        };
      };

      input.click();
    });
  }
}
