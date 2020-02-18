import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from './MediaCard';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Articles() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <MediaCard cardPhotoUrl="photo1.jpg" cardTitle="Article" cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                
            </MediaCard>
            <MediaCard cardPhotoUrl="photo2.jpg" cardTitle="Article" cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                
            </MediaCard>
            <MediaCard cardPhotoUrl="photo3.jpg" cardTitle="Article" cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">

            </MediaCard>
            <MediaCard cardPhotoUrl="photo1.jpg" cardTitle="Article" cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                
            </MediaCard>
            <MediaCard cardPhotoUrl="photo2.jpg" cardTitle="Article" cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                
            </MediaCard>
            <MediaCard cardPhotoUrl="photo3.jpg" cardTitle="Article" cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">

            </MediaCard>
        </div>
    )
}