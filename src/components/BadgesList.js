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

function useSearchBadges(badges){
   const [query, setQuery] = React.useState('');
   const [filterBadges, setFilterBadges] = React.useState(badges);

   React.useMemo(()=>{
      const result = badges.filter((badge)=>{
         return `${badge.firstName} ${badge.lasstName}`
         .toLowerCase()
         .includes(query.toLowerCase());
      })
      setFilterBadges(result);
   }, [badges, query]);

   return {query, setQuery, filterBadges};
}

function BadgesList(props) {
   const badges = props.badges;
   const {query, setQuery, filterBadges}= useSearchBadges(badges);

   if (filterBadges.length === 0) {
      return (
         <div>
            <div className="form-group">
               <label htmlFor="">Filter badges</label>
               <input className="form-control" placeholder="Search" type="text"
                  value={query}
                  onChange={(e) => {
                     setQuery(e.target.value);
                  }}
               />
            </div>

            <h3>No badges found</h3>
            <Link className="btn btn-primary" to="/badges/new">
               Create New Badge
               </Link>
         </div>
      )
   }
   return (
      <ul className="list-unstyled BadgesList">

         <div className="form-group">
            <label htmlFor="">Filter badges</label>
            <input className="form-control" placeholder="Search" type="text"
               value={query}
               onChange={(e) => {
                  setQuery(e.target.value);
               }}
            />
         </div>

         {filterBadges.map((badge) => {
            return (
               <li key={badge.id}>
                  <Link
                     className="text-reset text-decoration-none"
                     to={`/badges/${badge.id}`}>
                     <BadgesListItem badge={badge} />
                  </Link>
               </li>
            )
         })}
      </ul>
   )
}

export default BadgesList