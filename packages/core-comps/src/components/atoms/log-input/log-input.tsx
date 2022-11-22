import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'log-input',
  styleUrl: 'log-input.css',
  shadow: true,
})
export class LogInput {
  private timeout = null;
  private ref: HTMLInputElement;

  @Prop() name: string;

  @Event() focused: EventEmitter
  @Event() entered: EventEmitter<string>
  @Event() getValue: EventEmitter<string>
  
  private onKeyup(ev: KeyboardEvent) {
    clearTimeout(this.timeout);
    const key = (ev.target as HTMLInputElement).value.toLocaleLowerCase();

    if(key === "enter") this.entered.emit(this.ref.value)

    this.timeout = setTimeout(() => {
      this.getValue.emit(this.ref.value)
    }, 1000);
  }

  render() {
    return (
      <Host>
       <input ref={r => this.ref = r} onKeyUp={ev => this.onKeyup(ev)} onFocus={() => this.focused.emit()} />
      </Host>
    );
  }

}
