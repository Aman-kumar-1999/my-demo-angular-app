import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItem } from './accordion-item';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-demo-app');

  accordionItems: AccordionItem[] = [
    {
      title: 'Section 1',
      content: 'This is the content of section 1.',
      isOpen: false
    },
    {
      title: 'Section 2',
      content: 'Content for section 2 goes here.',
      isOpen: false
    },
    {
      title: 'Section 3',
      content: 'Details of section 3 can be read here.',
      isOpen: false
    }
  ];

  toggleItem(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }
  
}
