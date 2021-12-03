import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'yell'
})
export class YellPipe implements PipeTransform {

	transform(value: unknown, ...args: unknown[]): unknown {
		return `${value}${args[0] ?? '!!!'}`;
	}

}
