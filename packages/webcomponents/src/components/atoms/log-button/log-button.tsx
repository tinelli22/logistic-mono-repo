import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'log-button',
  styleUrl: 'log-button.scss',
  shadow: true,
})
export class LogButton {
  @Prop() label: string;
  @Prop() backgroundVariant? = 'primary'
  @Prop() colorVariant? = 'light'
  @Prop() behavior?: 'static' | 'hover' = 'hover'
  @Prop({ reflect: true }) disable? = false;

  @Event() clickButton: EventEmitter;

  render() {
    
    const classes = {
      [`bg-${this.backgroundVariant}`]: !!this.backgroundVariant,
      [this.colorVariant]: !!this.colorVariant,
      [this.behavior]: !!this.behavior
    }

    return (
      <Host>
        <button class={classes} disabled={this.disable} onClick={() => this.clickButton.emit()}>
          <span>
            {this.label}
          </span>
        </button>
      </Host>
    );
  }
}
