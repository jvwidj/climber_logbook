//

import Paper from './Paper';
import Card from './Card';
import CssBaseline from './CssBaseline';
import Tooltip from './Tooltip';
/* 
import Input from './Input';
import Button from './Button';
import Backdrop from './Backdrop';
import Typography from './Typography';
import Autocomplete from './Autocomplete'; */

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Paper(theme),
    Tooltip(theme),
    //CssBaseline(theme),
    /* Input(theme),
    Button(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme) */
  );
}