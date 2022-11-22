import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'log-icon',
  styleUrl: 'log-icon.scss',
  assetsDirs: ["assets"],
  shadow: true,
})
export class LogIcon {
 
  @Prop() name: string;

  render() {
   
    return (
      <Host>
        <span class={`icon-${this.name}`}></span>
      </Host>
    );
  }
}
