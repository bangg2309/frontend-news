import React, {ChangeEvent, useEffect} from "react";
import {
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem, Pagination, PaginationItem,
    Select,
    SelectChangeEvent, Stack,
    TextField
} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getAllNameURLAndRss} from "../../services/GetData";
import {Paging} from "../../interfaces/Paging";
import {fetchRSSData} from "../../services/rssService";
import {viVN} from "@mui/x-date-pickers/locales";
import HorizonePost from "../post/HorizonePost";
import {RSSItem} from "../../interfaces/RSSItem";
import {useNavigate, useParams} from "react-router-dom";

const defaultPaging: Paging = {
    page: 0,
    limit: 10,
    total: 0,
    totalPage: 0,
    post: [],
}
const SearchContent: React.FC = () => {
    const search = useParams();
    // const navigate = useNavigate();
    const [content, setContent] = React.useState<string>(search.search || '')
    const [paging, setPaging] = React.useState(defaultPaging)
    const [selectedDate, setSelectedDate] = React.useState <Dayjs>(dayjs(new Date()));
    const allCategory = getAllNameURLAndRss().splice(1);
    const [selectedCategory, setSelectedCategory] = React.useState(allCategory[0].rss);
    const [selectSearchWith, setSelectSearchWith] = React.useState(`1`)
    const handleContentSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        // setTimeout(() => {
            setContent(event.target.value)
        // }, 500)
    }

    const handleDateChange = (value: any) => {
        setSelectedDate(value);
    }
    const handleSelectSearch = (event: SelectChangeEvent<string>) => {
        setSelectSearchWith(event.target.value);
    }
    const handleSelectedCategory = (event: SelectChangeEvent<string>) => {
        setSelectedCategory(event.target.value);
    }
    const filterPost = (post: RSSItem[]) => {
        return post.filter((item) => {
            let matchesContent = true;
            let matchesDate = true;
            if (content !== '') {
                if (selectSearchWith === '1') {
                    matchesContent = item.title.toLowerCase().includes(content.toLowerCase());
                } else {
                    matchesContent = item.description.toLowerCase().includes(content.toLowerCase());
                }
            }
            if (selectedDate) {
                matchesDate = dayjs(item.pubDate).format('DD-MM-YYYY') === selectedDate.format('DD-MM-YYYY');
            }
            return matchesContent && matchesDate;
        });
    }

    useEffect(() => {
        console.log(content)
        fetchRSSData(selectedCategory).then((data) => {
            setPaging((prev) => {
                return {
                    ...prev,
                    post: filterPost(data),
                    total: filterPost(data).length,
                    totalPage: filterPost(data).length % prev.limit === 0 ? filterPost(data).length / prev.limit : Math.floor(filterPost(data).length / prev.limit) + 1
                }
            })
        })
    }, [selectedCategory, selectedDate, selectSearchWith, content]);

    const handleChangePage = (e: React.ChangeEvent<unknown>, v: number) => {
        setPaging((prev) => {
            return {
                ...prev,
                page: v - 1
            }
        });
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="Tìm kiếm"
                        value={content}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </InputAdornment>
                            )
                        }}
                        fullWidth
                        size={'medium'}
                        sx={{paddingTop: '8px'}}
                        onChange={handleContentSearchChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControl sx={{marginTop: '8px', minWidth: 120, width: '100%'}}>
                        <Select
                            labelId="select-search-with"
                            id="demo-simple-select-helper"
                            value={selectSearchWith}
                            autoWidth
                            onChange={handleSelectSearch}
                        >
                            <MenuItem value={`1`}>Theo tên</MenuItem>
                            <MenuItem value={`2`}>Theo mô tả</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl sx={{marginTop: '8px', minWidth: 120, width: '100%'}}>
                        <InputLabel id="category-label">Chuyên mục</InputLabel>
                        <Select
                            labelId="category-label"
                            id="select-category"
                            value={selectedCategory}
                            label="Chuyên mục"
                            autoWidth
                            onChange={handleSelectedCategory}
                        >
                            {allCategory.map((item, index) => {
                                return (
                                    <MenuItem value={item.rss}>{item.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <LocalizationProvider localeText={viVN.components.MuiLocalizationProvider.defaultProps.localeText}
                                          dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker format={'DD-MM-YYYY'} value={selectedDate}
                                        onChange={handleDateChange}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Box marginTop={1}>
                {paging.post.slice(paging.page * paging.limit, paging.page * paging.limit + paging.limit).map((item, index) => {
                    return (
                        <Box marginTop={1}>
                            <HorizonePost NewsView={item} titleSize={'h6'} key={index}/>
                        </Box>
                    )
                })
                }
                <Pagination sx={{margin: 'auto'}} count={paging.totalPage} variant="outlined"
                            shape="rounded"
                            renderItem={(item) => (
                                <PaginationItem
                                    component={Stack}
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{width: 30, height: 30}}
                                    {...item}
                                />
                            )}
                            onChange={handleChangePage}
                />
            </Box>
        </>
    )
}
export default SearchContent;