import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IntroComponent } from "../../components/ui/intro/intro.component";

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})

export class CommunityComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Community - Bitcoin Silver');
  }
}
