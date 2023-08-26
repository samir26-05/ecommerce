import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { data } from '../../data.js'
import ProductList from '../../components/Layout/body/products/ProductList.jsx';
import Header from '../../components/Layout/header/Header.jsx';

export default function Sections() {
    const [userEnterUser, setUserEnterUser] = useState(false);

    const verifyEnter = () => {
        return true
    };

    useEffect(() => {
        const trueEnter = verifyEnter();
        setUserEnterUser(trueEnter);

        return () => {
            setUserEnterUser(false);
        };
    }, []);

    const limitedData = data.slice(0, 2);

    return (
        <Box sx={{ width: "100%", height: "100vh", overflowY: 'scroll'}}>
            <Header isUsedUser={userEnterUser} />
            <ImageList variant="masonry" cols={1} gap={2} sx={{ marginTop: 5 }}>
                {limitedData.map((item) => (
                    <ImageListItem key={item.img}>
                        <ProductList />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

