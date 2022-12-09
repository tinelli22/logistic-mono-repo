import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'log-text',
  styleUrl: 'log-text.scss',
  shadow: true,
})
export class LogText {
 
  @Prop() color?: string = 'light'
  @Prop() elementId? = '';
  @Prop() behavior?: 'static' | 'hovered' = 'static';

  @Event() clicked: EventEmitter;

  render() {
    const classes = {
     [this.color]: !!this.color
    };

    return (
      <Host id={this.elementId} class={classes} onClick={() => this.clicked.emit()}>
        <slot></slot>
      </Host>
    );
  }
}
