import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { filter as _filter } from 'lodash';

@Component({
  selector: 'ui-layout-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiLayoutTabsComponent implements OnInit {
  @Input() public tabNames: Array<string> = [];
  public activeTab = 0;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    this.activeContent(this.activeTab);
  }

  public active(index: number): void {
    this.activeTab = index;
    this.activeContent(index);
  }

  private defaultLabels(count: number): void {
    if (this.tabNames.length === 0) {
      this.tabNames = [...Array(count).keys()].map(
        (key) => '0' + (key + 1).toString()
      );
    }
  }

  public activeContent(index: number): void {
    const contents =
      this.el.nativeElement.getElementsByClassName('content')[0].childNodes;
    this.defaultLabels(contents.length);
    _filter(contents, (content: HTMLElement, filterIndex: number) => {
      content.classList.remove('active');
      if (filterIndex === index) {
        content.classList.add('active');
      }
    });
  }
}
