import { Component, Host, h, Prop, Event, EventEmitter, Method } from '@stencil/core';
import { FeedbackStatusModel } from '../../../models/input.model';

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
  @Prop({ reflect: true }) status?: FeedbackStatusModel

  @Event() focused: EventEmitter;
  @Event() focusedOut: EventEmitter;
  @Event() entered: EventEmitter<string>;
  @Event() getValue: EventEmitter<string>;

  @Method()
  async getInputRef() {
    return this.ref;
  }

  private onKeyup(ev: KeyboardEvent) {
    clearTimeout(this.timeout);
    const key = (ev.target as HTMLInputElement).value.toLocaleLowerCase();

    if (key === 'enter') this.entered.emit(this.ref.value);

    this.timeout = setTimeout(() => {
      this.getValue.emit(this.ref.value);
    }, 1000);
  }

  render() {
    const classes = {
      [this.status &&`status ${this.status.status}`]: true
    }

    return (
      <Host
        class={classes}
      >
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
        {this.status && <span>{this.status.text}</span>}
      </Host>
    );
  }
}
