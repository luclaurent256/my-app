import React, { PureComponent} from 'react';

export class UserProfilCard extends PureComponent {
  render() {
    return (
      <>
      <img class="fit-picture"
      src = {this.props.imageSrc}
      alt="Mésange sur une branche"/>
      <div>
        <span className="name">{this.props.name} - {this.props.age} ans </span>
        <span className="city">{this.props.city}</span>
      </div>
      </>
    )
  }
}
export default UserProfilCard
