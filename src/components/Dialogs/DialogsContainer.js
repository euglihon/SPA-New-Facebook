import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageValueActionCreator } from '../../redux/dialogsReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch( updateMessageValueActionCreator(text) );
    },

    addMessageItem: () => {
      dispatch(addMessageActionCreator());
      dispatch(updateMessageValueActionCreator(''));
    }
  }
}


export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect //add hoc redirect
  ) (Dialogs)


