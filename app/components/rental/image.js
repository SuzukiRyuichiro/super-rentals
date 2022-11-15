import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // State management

  @tracked isLarge = false;

  // Actions
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
