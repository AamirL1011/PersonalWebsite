import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#e3cfa1",
        },
        secondary: {
            main: orange[500],
        },
    },
});

export default theme;
