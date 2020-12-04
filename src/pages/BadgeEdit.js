import React, { Component } from 'react';
import "./styles/BadgeEdit.css"
import header from '../images/platziconf-logo.svg'
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e)=>{
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading: false, form: data})
    } catch (error) {
      this.setState({loading: false, error: error})
    }

  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid BadgeEdit__hero-image" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First_Name'}
                lastName={this.state.form.lastName || 'Last_Name'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                email={this.state.form.email}
                avatarUrl="https://static.platzi.com/media/avatars/avatars/_hhugom_06e4ec41-e943-43a3-87ba-3f8b894c4d0c.jpg"
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
