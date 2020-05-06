import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from "./button.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('terrasse-button', module)
  .addDecorator(withKnobs)
  .add("knobs", () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
      ]
    },
    props: {
      text: text("text", "tester"),
      disabled: boolean("disabled", false),
      icon: text('icon', "")
    },
    template: '<terrasse-button [icon]="icon" [disabled]="disabled">{{text}}</terrasse-button>'
  }))

