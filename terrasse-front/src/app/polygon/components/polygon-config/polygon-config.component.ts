import { Component, OnInit, Input } from "@angular/core";
import { Polygon } from "../../models/polygon";
@Component({
  selector: "terrasse-polygon-config",
  templateUrl: "./polygon-config.component.html",
  styleUrls: ["./polygon-config.component.scss"],
})
export class PolygonConfigComponent implements OnInit {

  @Input() polygon: Polygon;

  constructor() { }

  ngOnInit() { }




}
