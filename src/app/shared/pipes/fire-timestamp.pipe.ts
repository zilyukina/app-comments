import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'fireTimestamp'
})
export class FireTimestampPipe implements PipeTransform {

  transform(value: Timestamp): number {
    return value ? value.toMillis() : 0;
  }

}
