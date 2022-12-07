import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'log-card',
  styleUrl: 'log-card.scss',
  shadow: true,
})
export class LogCard {

  @Prop() backgroundColor?: string;
  @Prop() backgroundColorHover?: string;
  

  render() {
    return (
      <Host>
        <div id="container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
