import "hammerjs";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PlaygroundModule } from "angular-playground";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./app/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

PlaygroundModule.configure({
  selector: "terrasse-root",
  overlay: true,
  modules: [MaterialModule, FormsModule, CommonModule, BrowserAnimationsModule, BrowserModule],
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
