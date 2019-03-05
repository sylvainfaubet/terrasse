import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DownloadService {
    constructor() {}

    saveAsJson(data, name: string = data.name || '') {
        const properties = { type: 'application/json' };

        const a = document.createElement('a');
        const blob = new Blob([JSON.stringify(data)], properties);
        a.href = window.URL.createObjectURL(blob);
        a.download = name + '.json';
        a.click();
    }

    getFromJson(): Promise<object> {
        return new Promise(resolve => {
            const input = document.createElement('input');
            input.type = 'file';

            interface HTMLInputEvent extends Event {
                target: HTMLInputElement & EventTarget;
            }

            input.onchange = function(e: HTMLInputEvent) {
                console.log('onChange');
                const file = e.target.files[0];
                const fileReader = new FileReader();
                fileReader.readAsText(file);
                fileReader.onloadend = () => {
                    resolve(JSON.parse(fileReader.result.toString()));
                };
            };

            input.click();
        });
    }
}
