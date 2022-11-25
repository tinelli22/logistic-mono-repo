import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'log-input',
  styleUrl: 'log-input.scss',
  shadow: true,
})
export class LogInput {
  private timeout = null;
  private ref: HTMLInputElement;

  @Prop() name: string;
  @Prop() placeHolder? = '';
  @Prop({ reflect: true }) disabled? = false;

  @Event() focused: EventEmitter;
  @Event() focusedOut: EventEmitter;
  @Event() entered: EventEmitter<string>;
  @Event() getValue: EventEmitter<string>;

  private onKeyup(ev: KeyboardEvent) {
    clearTimeout(this.timeout);
    const key = (ev.target as HTMLInputElement).value.toLocaleLowerCase();

    if (key === 'enter') this.entered.emit(this.ref.value);

    this.timeout = setTimeout(() => {
      this.getValue.emit(this.ref.value);
    }, 1000);
  }

  render() {
    return (
      <Host>
        <input
          ref={r => (this.ref = r)}
          placeholder={this.placeHolder}
          disabled={this.disabled}
          id={this.name}
          name={this.name}
          onFocusout={() => this.focusedOut.emit()}
          onKeyUp={ev => this.onKeyup(ev)}
          onFocus={() => this.focused.emit()}
        />
      </Host>
    );
  }
}
