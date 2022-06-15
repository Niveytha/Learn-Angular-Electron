import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-alert-simulation',
  templateUrl: './alert-simulation.component.html',
  styleUrls: ['./alert-simulation.component.css']
})
export class AlertSimulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $('#alert').on('change', function() {
        // alert($(this).val());
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(300);
      })
    });

  }

}