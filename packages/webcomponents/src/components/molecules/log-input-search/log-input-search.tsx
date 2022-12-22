import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { LogButtonModel } from '../../../models/button.model';
import { LogInputModel } from '../../../models/input.model';

@Component({
  tag: 'log-input-search',
  styleUrl: 'log-input-search.scss',
  shadow: true,
})
export class LogInputSearch {
  private inputRef: HTMLLogInputElement
  @Prop() inputProps: LogInputModel;
  @Prop() buttonProps: LogButtonModel;

  @Event() value: EventEmitter<string>;
  
  @Listen("getValue")
  @Listen("entered")
  listInputValue(ev: CustomEvent<string>) {
    this.value.emit(ev.detail)
  }

  private async clickButton() {
    const { value } = await this.inputRef.getInputRef()
    this.value.emit(value)
  }

  render() {
    return (
      <Host>
        <log-input ref={r => this.inputRef = r} id="input" {...this.inputProps} />
        <log-button {...this.buttonProps} id="btn" onClick={() => this.clickButton()} />
      </Host>
    );
  }

}
