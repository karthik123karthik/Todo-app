import React from 'react';
import { ListItem } from '@mui/material';

export default function Todo(props) {
    return (
        <>
          <ListItem>{props.value}</ListItem>
        </>
    )
}
