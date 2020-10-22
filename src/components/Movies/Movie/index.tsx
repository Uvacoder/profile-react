import { Movie } from '@material-ui/icons';
import React from 'react';

import './style.css'

type Props = {
    imdbID?: string,
    title: string,
    image: string,
    year: string
  }
  

const Movies: React.FC<Props> = props => {
    console.log(props);

    return <div className="movie">

        <h2>{props.title}</h2>
        <img src={props.image} alt={props.title}/>
        <h3>{props.year}</h3>

    </div>

}

export default Movie;