import styled from '@emotion/styled';
import {createMuiTheme} from '@material-ui/core/styles';

export const Panel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-form);
  width: 75%;
  height: 100%;
  padding: 0 30px;
`;

export const muiTheme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        color: 'var(--color-text-secondary)'
      }
    },
    MuiFormControl: {
      root: {
        height: '37px',
      },
      marginDense: {
        marginTop: '0px',
        marginBottom: '0px',
        border: '1px #313d4f solid',
        borderRadius: '4px',
        backgroundColor: '#222C3C',
      },
    },
    MuiPaper: {
      root: {
        margin: '10px',
        transform: 'scale(0.8) !important'
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'inherit',
        transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
    MuiTypography:{
      body1: {
        fontSize: '18px !important'
      }
    },
    MuiInput: {
      root: {
        color: '#fff',
        marginTop: '4px !important',
        lineHeight: '0px',
        // flexWrap: 'wrap-reverse',
        fontSize: '14px',
      },
      input: {
        marginLeft: '15px',
        marginTop: '5px',
      },
    },
    MuiInputLabel: {
      root: {
        display: 'none',
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: '#28313E !important',
      },
    },
    // @ts-ignore
    MuiPickersDay: {
      day: {
        color: 'white',
      },
      daySelected: {
        backgroundColor: '#28313E',
      },
      current : {
        color: '#89A7D4'
      }
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: '#9EA4AD !important'
      },
      iconButton: {
        backgroundColor: '#434C59',
        margin : '7px',
        boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)'
      }
    },
    MuiPickersBasePicker : {
      pickerView : {
        color: 'white',
        backgroundColor: '#313d4f'
      }
    }
  }
});

