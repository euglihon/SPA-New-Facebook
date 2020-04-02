import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activeEditMode = () => {
    this.setState (      // update local state (асинхронное выполнение)
      { editMode: true } // add new-edit object
    )
  }

  deActiveEditMode = () => {
    this.setState (
      { editMode: false }
    )
    this.props.updateProfileStatusThunk(this.state.status)
  }

  onStatusChange = (event) => {
    this.setState (
      { status: event.target.value }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevProps.status !== this.props.status) {   //сравнение нового стейта со старым
      this.setState (
        { status: this.props.status }
      )
    }
  }

  render() {
    return (
      <>
        {
          this.state.editMode === false
            ? <span onClick={ this.activeEditMode }>{this.props.status || 'no status'}</span>
            : <input onChange={ this.onStatusChange }  autoFocus={ true } onBlur={ this.deActiveEditMode } value={this.state.status} /> // onBlur -> exit focus;     autoFocus -> auto input focus
        }
      </>
    )
  }
}

export default ProfileStatus;
