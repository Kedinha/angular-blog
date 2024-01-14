import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string =
    'https://www.nichepursuits.com/wp-content/uploads/2023/05/ai-generators-1200x750.png';
  contentTitle: string = 'New AI';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur quod incidunt? Officia unde, velit dolorum repellendus rem pariatur, asperiores animi ullam quos nobis obcaecati libero excepturi inventore dolores voluptatum?';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
