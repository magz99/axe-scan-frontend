import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Scan } from 'src/app/services/types/master-scan.types';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UrlListComponent {
  @Input() scannedWebpages: Scan[] = [];
}
