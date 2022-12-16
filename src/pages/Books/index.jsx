import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { searchBooks } from "../../services";
import { BookItem } from "../../components";
import { Header , Footer } from "../../components"

const Books = () => {
  const [search, setSearch] = useState("");

  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const books = await searchBooks(search);
    setBooks(books.items);
  };

  return (
    <Container maxWidth="ml">
      <Header />
            <Box my={4}
            >
                <Card
                sx={{
                    backgroundColor: 'rgb(239, 245, 245)'
                }}>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 3,
                                alignItems: "center",
                                justifyContent: "space-between"
                                
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                label="Buscar un libro"
                                fullWidth
                                size="small"
                                variant="outlined"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <Box my={2}>
                                <Button size="large" variant="contained"
                                    onClick={handleSearch}
                                >
                                    Buscar
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                    
                </Card>
            </Box>

        {books.length > 0 &&
            books.map((book, index) => <BookItem key={index} book={book} />)}

        <Footer />
        </Container>
  );
};

export default Books;
