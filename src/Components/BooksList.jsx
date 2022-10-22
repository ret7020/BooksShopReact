import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BookItem from "./BookItem";

const BooksList = ({ database, images, ...props }) => {
    return (
        <>
            <Container sx={{ mt: "100px" }}>
                <Grid container spacing={2}>
                    {database.map(el => <BookItem key={el.id} book_info={el} images={images}> </BookItem>)}
                </Grid>
            </Container>
        </>
    );
}

export default BooksList;