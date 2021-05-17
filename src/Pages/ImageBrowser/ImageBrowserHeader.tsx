import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoadIcon from '@material-ui/icons/AutorenewOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// Component imports

// Styling
import './ImageBrowserHeader.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imageLocation: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: "100%",
  },
  nameTextBox: {
    width: "100%",
    minWidth: 200,
    margin: theme.spacing(1),
  },
  loadImagesButton: {
    width: "100%",
    minWidth: 200,
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  displayOrder: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: "100%",
  },
}));
interface IProps {
  loadImages: Function;
}

function ImageBrowserHeader({ loadImages }: IProps) {
  const classes = useStyles();
  const [imageLocation, setImageLocation] = React.useState<number>(1);
  const [imageDisplayOrder, setImageDisplayOrder] = React.useState<number>(1);
  const [searchTerm, setSearchTerm] = React.useState<string>('leekzh');

  const changeImageLocation = (event: React.ChangeEvent<{ value: number }>) => {
    return setImageLocation(event.target.value as number);
  };

  const changeImageDisplayOrder = (event: React.ChangeEvent<{ value: number }>) => {
    return setImageDisplayOrder(event.target.value as number);
  };

  const changeSearchTerm = (event: React.ChangeEvent<{ value: string }>) => {
    return setSearchTerm(event.target.value as string);
  };

  return (
    <div className="ImageBrowserHeader">
      <Grid container spacing={0} direction="row">
        <Grid item xs={12} className="orangeB"></Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.imageLocation}>
              <InputLabel id="lblImageLocation">Image Location</InputLabel>
              <Select labelId="lblImageLocation" id="cboFeedType" label="Image Location" value={imageLocation} onChange={changeImageLocation} defaultValue={1}> 
                <MenuItem value={1}>Global Feed</MenuItem>
                <MenuItem value={2}>User Photo Feed</MenuItem>
                <MenuItem value={3}>User Photo Library</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <FormControl variant="outlined" className={classes.displayOrder}>
              <InputLabel id="lblDisplayOrder">Display Order</InputLabel>
              <Select labelId="lblDisplayOrder" id="cboDisplayOrder" label="Display Order" value={imageDisplayOrder} onChange={changeImageDisplayOrder} defaultValue={1} >
                <MenuItem value={1}>Newest To Oldest</MenuItem>
                <MenuItem value={2}>Oldest To Newest</MenuItem>
                <MenuItem value={3}>Cheers Ascending</MenuItem>
                <MenuItem value={4}>Cheers Descending</MenuItem>
                <MenuItem value={5}>Comment Count Ascending</MenuItem>
                <MenuItem value={6}>Comment Count Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={1} >
            <TextField id="txtSearch" className={classes.nameTextBox} label="Enter Search.." variant="outlined" onChange={changeSearchTerm} value={searchTerm}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3} className="orangeB">
          <Box display="flex" justifyContent="center" p={2}>
            <Button id="btnLoadImages" variant="contained" onClick={() => loadImages(imageLocation, imageDisplayOrder, searchTerm)} className={classes.loadImagesButton} size="large" color="primary" startIcon={<LoadIcon />}>Load Images</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageBrowserHeader;