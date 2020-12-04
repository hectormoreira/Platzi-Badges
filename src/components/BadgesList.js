import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from "./Gravatar";
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
   render() {
     return (
       <div className="BadgesListItem">
         <Gravatar
           className="BadgesListItem__avatar"
           email={this.props.badge.email}
         />
 
         <div>
           <strong>
             {this.props.badge.firstName} {this.props.badge.lastName}
           </strong>
           <br />@{this.props.badge.twitter}
           <br />
           {this.props.badge.jobTitle}
         </div>
       </div>
     );
   }
 }


class BadgesList extends React.Component {
   render() {
      if (this.props.badges.length === 0) {
         return (
            <div>
               <h3>No badges found</h3>
               <Link className="btn btn-primary" to="/badges/new">
                  Create New Badge
               </Link>
            </div>
         )
      }
      return (
         <ul className="list-unstyled BadgesList">
            {this.props.badges.map((badge) => {
               return (
                  <li key={badge.id}>
                     <Link
                        className="text-reset text-decoration-none"
                        to={`/badges/${badge.id}/edit`}>
                        <BadgesListItem badge={badge} />
                     </Link>
                  </li>
               )
            })}
         </ul>
      )
   }
}

export default BadgesList