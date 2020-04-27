import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from "./button.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

storiesOf('terrasse-button', module)
  .add("texte", () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
      ]
    },
    props: {
      text: "tester"
    },
    template: '<terrasse-button>{{text}}</terrasse-button>'
  }))
  .add("icone", () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
      ]
    },
    props: {
      text: "tester",
      icon: "add"
    },
    template: '<terrasse-button [icon]="icon"></terrasse-button>'
  }))

