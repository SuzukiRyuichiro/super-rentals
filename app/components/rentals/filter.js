import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    const { rentals, query } = this.args;

    return query
      ? rentals.filter((rental) =>
          rental.title.toLowerCase().includes(query.toLowerCase())
        )
      : rentals;
  }
}
