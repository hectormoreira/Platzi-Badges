import React, { Component } from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import Api from "../api";

class Badges extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await Api.badges.list();
            this.setState({
                loading: false,
                data: data
            })
        } catch (err) {
            this.setState({
                loading: false,
                error: err
            })
        }
    }

    render() {
        if (this.state.loading) {
            return 'Loading';
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
