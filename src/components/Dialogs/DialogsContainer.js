import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageValueActionCreator } from '../../redux/dialogsReducer';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;

